 
import Banner from "../components/Home/Banner";
import About from "./About";
import Products from "./Products";
 
function Home() {
  return (
    <div className="  bg-zinc-800"  >
  
      <Banner  />
       <About/>
       <Products/>
    </div>
  );
}

export default Home;
