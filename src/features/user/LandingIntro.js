import TemplatePointers from "./components/TemplatePointers";

function LandingIntro() {
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200" style={{ backgroundImage: 'url("./backgroung.jpeg")', height: '200px', opacity: 1  }}>
      <div className="hero-content py-12" style={{backgroundColor:'white', opacity: 0.7}} >
      <img src="/logo.jpeg" />

        {/* <div className="max-w-md">
          <h1 className="text-3xl text-center font-bold ">User Portal</h1> */}
          {/* <TemplatePointers /> */}
          {/* <div className="text-center mt-12">
            <img
              src="./AH1.png"
              alt="User Dashboard"
              className="w-48 inline-block rounded-full"
            ></img>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default LandingIntro;
