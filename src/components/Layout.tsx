import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import BackToTop from './BackToTop';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CustomCursor />
      <Header />
      <main className="pb-20 md:pb-0">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
