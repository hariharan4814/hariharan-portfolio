import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Layout;
