import LandingIntro from "./LandingIntro";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ModalLayout from "../../containers/ModalLayout";
import { useLogin } from "../../app/custom-hooks/login/useLogin";
import ErrorText from "../../components/Typography/ErrorText";
import InputText from "../../components/Input/InputText";
import HelperText from "../../components/Typography/HelperText";
import { useState } from "react";

function Login() {
  const { isOpen } = useSelector((state) => state.modal);
  const { login, isLoading, isSuccess, error } = useLogin();
  const [isNewUser, setIsNewUser] = useState(false);
  console.log(isNewUser);
  const showSignup=()=>{
    setIsNewUser(!isNewUser)
  }
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const submitForm = async (data) => {
    // await login(data); 
    window.location.href = "/app/dashboard";
    localStorage.setItem('access_token','dummyToken')
  };
  

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <>{isOpen && <ModalLayout />}</>
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          
        <div className="">
            <LandingIntro />
          </div>
          <div className="py-20 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">{isNewUser===false?"Login":"Create Account"}</h2>
            <form onSubmit={handleSubmit(submitForm)}>
              {isNewUser===false?
              <div className="mb-4">
                <div className={`form-control w-full`}>
                  <InputText
                    name="email"
                    labelTitle="Email"
                    containerStyle="mt-4"
                    control={control}
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format",
                      },
                    }}
                  />
                </div>
                <div className={`form-control w-full`}>
                  <InputText
                    name="password"
                    type={"password"}
                    labelTitle="Password"
                    containerStyle="mt-4"
                    control={control}
                    rules={{
                      required: "Password is required",
                    }}
                  />
                </div>
              </div>
              :
             <>
              <div className="mb-1">
                <div className={`form-control`}>
                  <InputText
                    name="email"
                    labelTitle="Email"
                    containerStyle="mt-1"
                    control={control}
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format",
                      },
                    }}
                  />
                </div>
                <div className={`form-control`}>
                  <InputText
                    name="password"
                    type={"password"}
                    labelTitle="Password"
                    containerStyle="mt-1"
                    control={control}
                    rules={{
                      required: "Password is required",
                    }}
                  />
                </div>
                <div className={`form-control`}>
                  <InputText
                    name="phone"
                    type={"tel"}
                    labelTitle="Phone"
                    containerStyle="mt-1"
                    control={control}
                    rules={{
                      required: "Phone is required",
                    }}
                  />
                </div>
              </div>
             </>
              }

              <button
                type="submit"
                disabled={isLoading}
                className="btn mt-2 w-full btn-primary"
              >
                {isNewUser===false?"Login":"Submit"}
              </button>
              <HelperText
              className={'cursor-pointer mt-1'}>
                <button type="button" onClick={showSignup} href="">{isNewUser===false?"Create Account":"Already have an  Account, Login"}</button>
              </HelperText>
              <ErrorText styleClass="mt-16">{error?.data?.message}</ErrorText>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
