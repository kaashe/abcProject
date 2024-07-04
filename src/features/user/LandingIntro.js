import TemplatePointers from "./components/TemplatePointers";

function LandingIntro() {
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200">
      <div className="hero-content py-12">
        <div className="max-w-md">
          <h1 className="text-3xl text-center font-bold ">User Portal</h1>
          {/* <TemplatePointers /> */}
          <div className="text-center mt-12">
            <img
              src="./AH1.png"
              alt="User Dashboard"
              className="w-48 inline-block rounded-full"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingIntro;
