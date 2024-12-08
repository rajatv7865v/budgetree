import React from "react";
import { Footer, Navbar } from "@/components";

interface Props {
  children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
  return (
    <>
      <div
        id='home'
        className='absolute inset-0 dark:bg-[linear-gradient(to_right,#f5f5f5,transparent_1px),linear-gradient(to_bottom,#f2f2f2,transparent_0.7px)] bg-[linear-gradient(to_right,#f2f2f2_1px,transparent_0.5px),linear-gradient(to_bottom,#f2f2f2_0.5px,transparent_2px)] bg-[size:2rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full'
      />
      <Navbar />
      <main className='mt-20  mx-auto w-full z-0 relative'>{children}</main>
      <Footer />
    </>
  );
};

export default MarketingLayout;
