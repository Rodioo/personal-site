import homePhoto from '../assets/home_photo.png';

//TODO: add button for primary CTA and useNavigate for redirect
// TODO: think how to scale image width fro md: screen size
function Home() {
  return (
    <div
      data-testid="HOME"
      className="m-8 mt-24 flex flex-col border lg:flex-row lg:justify-between">
      <div className="flex flex-col font-lato">
        <span className="text-5xl tracking-wider text-white">Hi,</span>
        <span className="mt-2 text-5xl tracking-wider text-white">
          I'm Antonio Fălcescu
        </span>
        <span className="mt-4 text-3xl font-medium tracking-widest text-taupe-gray">
          Software Developer
        </span>
        <div className="mt-12">
          <button className="text-white">Learn More</button>
          <button className="ml-8 text-white">Resume</button>
        </div>
      </div>
      <img
        src={homePhoto}
        alt=""
        className="mt-24 w-full border text-center md:border-red-500 lg:mt-0 lg:w-96 lg:border-green-500 xl:border-blue-400"
      />
    </div>
  );
}

export default Home;
