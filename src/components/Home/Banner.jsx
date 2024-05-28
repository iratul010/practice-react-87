import { Link } from "react-router-dom";

function Banner() {
  const scrollToSection = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="hero h-[100vh] w-[100%]"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 0% 100%)",
      }}
    >
      <img
        src="../src/assets/food-img-home.jpeg"
        alt=""
        className="object-cover h-[100%] overflow-hidden w-full"
      />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" relative">
        <div className="w-[600px] m-auto p-4 absolute -top-40 left-1/2 transform -translate-x-1/2  h-60 bg-base-300 text-center shadow-2xl rounded-lg">
          <h1 className="mb-5 text-5xl font-bold  font-mono border-b-2 border-orange-500  ">Hello there</h1>
          <p className="mb-5 text-slate-700">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link   onClick={scrollToSection} className="btn bg-orange-600 hover:bg-orange-500 text-white">Get Started</Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
