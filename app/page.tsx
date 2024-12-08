import TopSection from "./Component/top";
import Navbar from "./Component/header";
import Banner from "./Component/homepage/banner";
import Editor from "./Component/homepage/editor";
import GreenSection from "./Component/homepage/green";
import SardiSection from "./Component/homepage/sardi";
import BlogSection from "./Component/homepage/blog";
import ProductSection from "./Component/homepage/product";

export default function Home() {
  
  return (
  <div className="">
    <TopSection />
    <Navbar />
    <Banner />
    <div className="hidden md:flex">
    <Editor />
    </div>
    
    <ProductSection />
    <GreenSection />
    <SardiSection />
    <BlogSection />
    
  </div>
  );
}
