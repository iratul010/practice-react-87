const About = () => {
  return (
    <div className="  mx-auto py-16 px-4 text-white bg-black">
      <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/3  mb-8 md:mb-0 md:pr-8">
          <img
            src="../src/assets/about-img.webp"
            alt="About Us"
            className="w-full  rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-lg mb-4">
            Welcome to Foodies, your number one source for all things delicious.
            We&apos;re dedicated to providing you the best recipes with a focus on
            quality, taste, and uniqueness.
          </p>
          <p className="text-lg mb-4">
            Founded in 2020 by Chef John, Foodies has come a long way from its
            beginnings in a small kitchen. When Chef John first started out, his
            passion for cooking drove him to start his own business.
          </p>
          <p className="text-lg">
            We hope you enjoy our recipes as much as we enjoy offering them to
            you. If you have any questions or comments, please don&apos;t hesitate to
            contact us.
          </p>
          <p className="mt-8 text-lg font-bold">
            Sincerely,
            <br />
            Chef John
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
