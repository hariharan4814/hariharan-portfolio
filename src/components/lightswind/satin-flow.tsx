"use client";

import React, { useEffect, useRef } from "react";

const vertexShaderSource = `
  attribute vec4 a_position;
  void main() {
    gl_Position = a_position;
  }
`;

const fragmentShaderSource = `
precision mediump float;

uniform vec2 iResolution;
uniform float iTime;
uniform vec2 iMouse;
uniform float iMouseStrength;

// Custom Uniforms
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uSpeed;
uniform float uScale;
uniform float uNoiseIntensity;
uniform float uInteractive;

// Hash function for pseudo-random gradient vectors
vec3 hash(vec3 p) {
    p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
             dot(p, vec3(269.5, 183.3, 246.1)),
             dot(p, vec3(113.5, 271.9, 124.6)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

// 3D Gradient Noise
float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    
    vec3 u = f * f * (3.0 - 2.0 * f);

    return mix(mix(mix(dot(hash(i + vec3(0.0,0.0,0.0)), f - vec3(0.0,0.0,0.0)), 
                       dot(hash(i + vec3(1.0,0.0,0.0)), f - vec3(1.0,0.0,0.0)), u.x),
                   mix(dot(hash(i + vec3(0.0,1.0,0.0)), f - vec3(0.0,1.0,0.0)), 
                       dot(hash(i + vec3(1.0,1.0,0.0)), f - vec3(1.0,1.0,0.0)), u.x), u.y),
               mix(mix(dot(hash(i + vec3(0.0,0.0,1.0)), f - vec3(0.0,0.0,1.0)), 
                       dot(hash(i + vec3(1.0,0.0,1.0)), f - vec3(1.0,0.0,1.0)), u.x),
                   mix(dot(hash(i + vec3(0.0,1.0,1.0)), f - vec3(0.0,1.0,1.0)), 
                       dot(hash(i + vec3(1.0,1.0,1.0)), f - vec3(1.0,1.0,1.0)), u.x), u.y), u.z);
}

// Fractional Brownian Motion (fbm) for premium satin/silk fabric fold details
float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    vec3 shift = vec3(100.0);
    for (int i = 0; i < 4; ++i) {
        v += a * noise(p);
        p = p * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 p = (2.0 * fragCoord.xy - iResolution.xy) / min(iResolution.x, iResolution.y);
    
    // Interactive mouse distortion
    vec2 mouseUV = (2.0 * iMouse - iResolution.xy) / min(iResolution.x, iResolution.y);
    float mouseDist = length(p - mouseUV);
    float interact = exp(-mouseDist * mouseDist * 3.5) * iMouseStrength * uInteractive;
    
    // Distort coordinates smoothly around cursor
    p += (p - mouseUV) / (mouseDist + 0.001) * interact * 0.18;

    // Time scaling based on speed uniform
    float t = iTime * uSpeed * 0.05;
    
    // Scale waves
    float scale = uScale * 2.2;
    vec3 p3 = vec3(p * scale, t);
    
    // Domain Warping to get luxurious silk-like ribbons/folds
    float n1 = fbm(p3);
    float n2 = fbm(p3 + vec3(n1 * 1.5, n1 * 1.2, 0.5));
    float n3 = fbm(p3 + vec3(n2 * 2.0, n2 * 1.0, 0.8));
    
    // Create wave pattern from FBM noise layers
    float pattern = 0.5 + 0.5 * sin(p.y * scale + n3 * 6.28);
    
    // Fabric shadow / highlights
    float shadow = clamp(n3 * 1.1, -0.5, 0.5);
    float highlight = pow(max(0.0, 1.0 - abs(n2)), 3.5) * 0.42;
    
    // Blend colors for a professional velvet/silk sheen
    vec3 baseCol = mix(uColor1, uColor2, clamp(pattern + shadow, 0.0, 1.0));
    baseCol = mix(baseCol, uColor3, clamp(n1 * 1.4 + 0.5, 0.0, 1.0));
    
    // Add satin gloss & mouse feedback highlight
    vec3 col = baseCol + vec3(highlight) + vec3(interact * 0.08);
    
    // Fine-grained high-end noise overlay
    float rnd = fract(sin(dot(fragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
    col -= (rnd - 0.5) * 0.04 * uNoiseIntensity;
    
    // Clamp to valid rgb range
    col = clamp(col, 0.0, 1.0);

    fragColor = vec4(col, 1.0);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

export type BlurSize = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export interface SatinFlowProps {
  colors?: string[];
  speed?: number;
  scale?: number;
  noiseIntensity?: number;
  interactive?: boolean;
  backdropBlurAmount?: BlurSize;
  className?: string;
  style?: React.CSSProperties;
}

const blurClassMap: Record<BlurSize, string> = {
  none: "backdrop-blur-none",
  sm: "backdrop-blur-sm",
  md: "backdrop-blur-md",
  lg: "backdrop-blur-lg",
  xl: "backdrop-blur-xl",
  "2xl": "backdrop-blur-2xl",
  "3xl": "backdrop-blur-3xl",
};

const hexToRgb = (hex: string): [number, number, number] => {
  try {
    const cleaned = hex.replace("#", "");
    const num = parseInt(cleaned, 16);
    return [
      ((num >> 16) & 255) / 255,
      ((num >> 8) & 255) / 255,
      (num & 255) / 255,
    ];
  } catch {
    return [0, 0, 0];
  }
};

const defaultColors = ["#150921", "#371569", "#7822d6"]; // Deep luxurious violet satin colors

export const SatinFlow: React.FC<SatinFlowProps> = ({
  colors = defaultColors,
  speed = 1.0,
  scale = 1.0,
  noiseIntensity = 0.5,
  interactive = true,
  backdropBlurAmount = "none",
  className = "",
  style,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const visibilityRef = useRef(true);

  // Mouse coords and active strength refs
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const mouseStrengthRef = useRef({ value: 0, targetValue: 0 });

  // Uniform values in refs to update in real-time without recompiling shaders
  const propsRef = useRef({
    colors,
    speed,
    scale,
    noiseIntensity,
    interactive,
  });

  useEffect(() => {
    propsRef.current = {
      colors,
      speed,
      scale,
      noiseIntensity,
      interactive,
    };
  }, [colors, speed, scale, noiseIntensity, interactive]);

  useEffect(() => {
    const handleVisibility = () => {
      visibilityRef.current = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { powerPreference: "high-performance", alpha: true });
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const compileShader = (type: number, source: string): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const iResolutionLocation = gl.getUniformLocation(program, "iResolution");
    const iTimeLocation = gl.getUniformLocation(program, "iTime");
    const iMouseLocation = gl.getUniformLocation(program, "iMouse");
    const iMouseStrengthLocation = gl.getUniformLocation(program, "iMouseStrength");

    const uColor1Location = gl.getUniformLocation(program, "uColor1");
    const uColor2Location = gl.getUniformLocation(program, "uColor2");
    const uColor3Location = gl.getUniformLocation(program, "uColor3");
    
    const uSpeedLocation = gl.getUniformLocation(program, "uSpeed");
    const uScaleLocation = gl.getUniformLocation(program, "uScale");
    const uNoiseIntensityLocation = gl.getUniformLocation(program, "uNoiseIntensity");
    const uInteractiveLocation = gl.getUniformLocation(program, "uInteractive");

    // Initialize dimensions immediately
    const initW = canvas.clientWidth || window.innerWidth || 800;
    const initH = canvas.clientHeight || window.innerHeight || 600;
    canvas.width = initW;
    canvas.height = initH;

    const handleResize = () => {
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (w > 0 && h > 0 && (canvas.width !== w || canvas.height !== h)) {
        canvas.width = w;
        canvas.height = h;
      }
    };
    window.addEventListener("resize", handleResize);

    // Native mouse and touch listeners attached to window
    const handleMouseMove = (e: MouseEvent) => {
      if (!propsRef.current.interactive) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = rect.height - (e.clientY - rect.top);
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
      mouseStrengthRef.current.targetValue = 1.0;
    };

    const handleMouseEnter = () => {
      if (!propsRef.current.interactive) return;
      mouseStrengthRef.current.targetValue = 1.0;
    };

    const handleMouseLeave = () => {
      if (!propsRef.current.interactive) return;
      mouseStrengthRef.current.targetValue = 0.0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!propsRef.current.interactive || e.touches.length === 0) return;
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = rect.height - (touch.clientY - rect.top);
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!propsRef.current.interactive) return;
      mouseStrengthRef.current.targetValue = 1.0;
      handleTouchMove(e);
    };

    const handleTouchEnd = () => {
      if (!propsRef.current.interactive) return;
      mouseStrengthRef.current.targetValue = 0.0;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    let startTime = Date.now();
    let animationFrameId: number;

    const render = () => {
      if (!visibilityRef.current) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      // Handle resize and match resolution
      const width = canvas.clientWidth || window.innerWidth;
      const height = canvas.clientHeight || window.innerHeight;
      if (width > 0 && height > 0 && (canvas.width !== width || canvas.height !== height)) {
        canvas.width = width;
        canvas.height = height;
      }

      gl.useProgram(program);
      gl.viewport(0, 0, canvas.width, canvas.height);

      const currentTime = (Date.now() - startTime) / 1000;

      // Lerp mouse coordinates and strength for smooth momentum
      const mouse = mouseRef.current;
      const mouseStrength = mouseStrengthRef.current;

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;
      mouseStrength.value += (mouseStrength.targetValue - mouseStrength.value) * 0.08;

      gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(iTimeLocation, currentTime);
      gl.uniform2f(iMouseLocation, mouse.x, mouse.y);
      gl.uniform1f(iMouseStrengthLocation, mouseStrength.value);

      // Parse current colors from ref dynamically
      const currentColors = propsRef.current.colors;
      const parsed = currentColors.map(hexToRgb);
      const c1 = parsed[0] || [0.0, 0.0, 0.0];
      const c2 = parsed[1] || parsed[0] || [0.0, 0.0, 0.0];
      const c3 = parsed[2] || parsed[1] || parsed[0] || [0.0, 0.0, 0.0];

      gl.uniform3fv(uColor1Location, c1);
      gl.uniform3fv(uColor2Location, c2);
      gl.uniform3fv(uColor3Location, c3);

      gl.uniform1f(uSpeedLocation, propsRef.current.speed);
      gl.uniform1f(uScaleLocation, propsRef.current.scale);
      gl.uniform1f(uNoiseIntensityLocation, propsRef.current.noiseIntensity);
      gl.uniform1f(uInteractiveLocation, propsRef.current.interactive ? 1.0 : 0.0);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(positionBuffer);

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const finalBlurClass = blurClassMap[backdropBlurAmount] || blurClassMap["none"];

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}
      style={style}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ display: "block" }}
      />
      <div className={`absolute inset-0 pointer-events-none ${finalBlurClass}`} />
    </div>
  );
};

export default SatinFlow;
