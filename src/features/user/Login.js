import LandingIntro from "./LandingIntro";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ModalLayout from "../../containers/ModalLayout";
import { useLogin } from "../../app/custom-hooks/login/useLogin";
import ErrorText from "../../components/Typography/ErrorText";
import InputText from "../../components/Input/InputText";
import HelperText from "../../components/Typography/HelperText";
import { useEffect, useState } from "react";
import FileInput from "../../components/Input/FileInput";
import { showNotification } from "../common/headerSlice";

function Login() {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [isNewUser, setIsNewUser] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const {login, isLoading, isSuccess, isError, error, signUphandler, signUpisSuccess, signUpIsloading, signUpisError, signUpError } = useLogin();
  const showSignup = () => {
    setIsNewUser(!isNewUser);
  };
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
      photo: "12313112312312.jpg",
    },
  });
  const imageHandler = (files) => {
    setSelectedImage(files[0]);
  };
  const submitForm = async (data) => {
    if (isNewUser) {
      // Handle image upload if image is selected
      const formData = new FormData();
      for (const key in data) {
        if (key === "photo" && data[key][0]) {
          formData.append(key, data[key][0]);
        } else {
          formData.append(key, data[key]);
        }
      }
      const response = await signUphandler(formData);
      localStorage.setItem('access_token', response?.token)
      window.location.href = "/app/dashboard";
      console.log(response, 'ressss');
    } else {
      const response = await login(data)
      console.log(response, 'ressss login');
    }
  };

  useEffect(() => {
    if (signUpisSuccess) {
      dispatch(showNotification({ message: "User Created!", status: 1 }));
    } else if (signUpisError) {
      console.log(signUpError, 'error sssssssssssss');
      dispatch(showNotification({ message: signUpError?.data?.error?.message, status: 0 }));
    }
  }, [signUpisSuccess, signUpisError, signUpError, dispatch]);

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <>{isOpen && <ModalLayout />}</>
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl">
          <div className="">
            <LandingIntro />
          </div>
          <div className="py-20 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              {isNewUser === false ? "Login" : "Create Account"}
            </h2>
            <form onSubmit={handleSubmit(submitForm)}>
              {isNewUser === false ? (
                <div className="mb-4">
                  <div className={`form-control w-full`}>
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
              ) : (
                <>
                  <div className="mb-1">
                    <div className={`form-control`}>
                      <InputText
                        name="fullname"
                        labelTitle="Full Name"
                        containerStyle="mt-1"
                        control={control}
                        rules={{
                          required: "Full Name is required",
                        }}
                      />
                    </div>
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
                        name="passwordConfirm"
                        type={"password"}
                        labelTitle="Confirm Password"
                        containerStyle="mt-1"
                        control={control}
                        rules={{
                          required: "Confirm Password is required",
                        }}
                      />
                    </div>
                    {/* <div className={`form-control`}>
                      <Controller
                        name="photo"
                        control={control}
                        rules={{ required: "Photo is required" }}
                        render={({ field }) => (
                          <FileInput
                            labelTitle="Upload Photo"
                            name="photo"
                            onChange={(e) => {
                              field.onChange(e.target.files);
                              imageHandler(e.target.files);
                            }}
                            placeholder="Choose image..."
                          />
                        )}
                      />
                      {errors.photo && (
                        <span className="text-error">{errors.photo.message}</span>
                      )}
                    </div> */}
                  </div>
                </>
              )}
              {signUpisError && (
                <div className="flex justify-center mt-4">
                  <span className="label-text-alt text-center text-error">
                    {signUpError?.data?.message}
                  </span>
                </div>
              )}
              <button
                type="submit"
                disabled={signUpIsloading}
                className="btn mt-2 w-full btn-primary"
              >
                {isNewUser === false ? "Login" : "Submit"}
              </button>
              <HelperText className={"cursor-pointer mt-1"}>
                <button type="button" onClick={showSignup} href="">
                  {isNewUser === false
                    ? "Create Account"
                    : "Already have an Account, Login"}
                </button>
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
