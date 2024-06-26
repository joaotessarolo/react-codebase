"use client";

import Footer from "./includes/Footer";
import MainHeader from "./includes/MainHeader";
import SubMenu from "./includes/SubMenu";
import TopMenu from "./includes/TopMenu";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <div id="MainLayout" className="min-w-[1050px] max-w-[1300px] mx-auto">
        <div>
          <TopMenu />
          <MainHeader />
          <SubMenu />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
