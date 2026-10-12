import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent">
      <div className="text-center glass p-8 rounded-3xl border border-border max-w-md mx-4">
        <h1 className="mb-4 text-5xl font-black text-primary">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="inline-flex items-center px-6 py-3 rounded-2xl font-bold gradient-primary text-white shadow-md hover:shadow-lg transition-all">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
