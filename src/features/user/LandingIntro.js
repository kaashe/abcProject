import TemplatePointers from "./components/TemplatePointers";

function LandingIntro() {
  return (
    <div
      className="hero min-h-full w-full bg-cover bg-center bg-base-200 flex justify-center items-center"
      style={{ backgroundImage: 'url("./backgroung.jpeg")', height: '100vh' }}
    >
      <div className="hero-content py-12 flex flex-col items-center justify-center" style={{ backgroundColor: 'white', opacity: 0.8 }}>
        {/* Centered Logo */}
        <img 
          src="/logo.jpeg" 
          alt="Logo"
          className="max-w-full h-auto sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
        />
      </div>
    </div>
  );
}

export default LandingIntro;
