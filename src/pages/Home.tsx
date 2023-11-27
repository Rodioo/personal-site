import homePhoto from '../assets/home_photo.png';

function Home() {
  return (
    <div
      data-testid="HOME"
      className="mt-24 flex h-screen w-screen flex-col p-6">
      <div className="flex flex-col font-lato">
        <span className="text-5xl tracking-wider text-white">Hi,</span>
        <span className="mt-2 text-5xl tracking-wider text-white">
          I'm Antonio Fălcescu
        </span>
        <span className="mt-4 text-3xl font-medium tracking-widest text-taupe-gray">
          Software Developer
        </span>
        <div className="mt-12 flex w-2/5 justify-between">
          <button className="text-white">Learn More</button>
          <button className="text-white">Resume</button>
        </div>
      </div>
      <img
        src={homePhoto}
        alt=""
        className="mt-24 w-fit text-center"
      />
    </div>
  );
}

export default Home;
