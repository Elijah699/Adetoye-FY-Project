import focusImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="wrapper pt-10 md:pt-32 2xl:pt-48 mb-10">
      <div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-4">
          <div className="w-full md:w-[50%]">
            <h1 className=" text-center md:text-left text-3xl md:text-6xl leading-[75px] md:leading-[100px]">
              Productivity tool that helps you focus on your work.
            </h1>
          </div>

          <div className="w-full md:w-[50%]">
            <img src={focusImg} alt="Focus Flow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
