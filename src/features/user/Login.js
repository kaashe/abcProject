import LandingIntro from "./LandingIntro";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ModalLayout from "../../containers/ModalLayout";
import { useLogin } from "../../app/custom-hooks/login/useLogin";
import ErrorText from "../../components/Typography/ErrorText";
import InputText from "../../components/Input/InputText";
import { TbReload } from "react-icons/tb";
import HelperText from "../../components/Typography/HelperText";
import { useCallback, useEffect, useState } from "react";
import { showNotification } from "../common/headerSlice";
import { openModal, closeModal } from "../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";

function Login() {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [isNewUser, setIsNewUser] = useState(false);
  const [theError, setTheError] = useState('');
  const [signUpIsloading, setSignUpIsloading] = useState(false);
  const {
    login,
    isLoading,
    isSuccess,
    isError,
    error,
    signUphandler,
    signUpisSuccess,
    signUpisError,
    signUpError,
  } = useLogin();

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
      photo: "3fdfef.png",
    },
  });

  const showSignup = () => {
    setIsNewUser(!isNewUser);
    reset();
    setTheError('');
    dispatch(closeModal());
  };

  const submitForm = async (data) => {
    setSignUpIsloading(true);
    try {
      if (isNewUser) {
        const formData = new FormData();
        for (const key in data) {
          if (key === "photo" && data[key][0]) {
            formData.append(key, data[key][0]);
          } else {
            formData.append(key, data[key]);
          }
        }
        const payload = { role: "Customer", ...data };
        console.log(payload);
        const response = await signUphandler(payload);
        localStorage.setItem('access_token', response?.token);
        if (response?.token) {
          setSignUpIsloading(false);
        }
      } else {
        const { email, photo, ...payload } = data;
        const response = await login(payload);
        console.log(response);
        localStorage.setItem('access_token', response?.token);
     const userData=    localStorage.setItem('user', JSON.stringify(response?.data?.user));
     
      }
    } catch (err) {
      console.error('Error in form submission:', err);
      setTheError(err.message);
      openErrorModal(err.message);
      setSignUpIsloading(false);
    }
  };

  const openErrorModal = useCallback((errorMessage) => {
    setTheError(errorMessage);
    dispatch(
      openModal({
        title: "Please fix the below error:",
        bodyType: MODAL_BODY_TYPES.OPEN_ERROR_MODAL,
        extraObject: { error: errorMessage },
      })
    );
  }, [dispatch]);

  const closeErrorModal = useCallback(() => {
    setTheError('');
    dispatch(closeModal());
  }, [dispatch]);

  useEffect(() => {
    if (signUpisSuccess) {
      dispatch(showNotification({ message: "User Created!", status: 1 }));
      setTimeout(() => {
        window.location.reload();
      }, 5000)
    } else if (isSuccess) {
      dispatch(showNotification({ message: "Logged in Successfully!", status: 1 }));
      const user = localStorage.getItem("user")
     const allData = JSON?.parse(user);
     localStorage.setItem('originalBalance',allData?.balance)
      window.location.href = "/app/dashboard";
    }
    else if (isError) {
      setTheError(error?.data?.message || "An error occurred");
      openErrorModal(error?.data?.message || "An error occurred");
    } else if (signUpisError) {
      setTheError(signUpError?.data?.message || "An error occurred");
      openErrorModal(signUpError?.data?.message || "An error occurred");
    }
  }, [signUpisSuccess, isSuccess, signUpisError, signUpError, isError, error, dispatch, openErrorModal]);

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      {isOpen && <ModalLayout onClose={closeErrorModal} error={theError} />}
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div>
            <LandingIntro />
          </div>
          <div className="py-20 px-10">
            <div className=" font-semibold  text-center">
          <img
              src="./AH1.png"
              alt="User Dashboard"
              className="w-48 inline-block rounded-full"
              ></img>
              </div>
            {/* <h2 className="text-2xl font-semibold mb-2 text-center">
              {isNewUser ? "Create Account" : "Login"}
            </h2> */}
            <form onSubmit={handleSubmit(submitForm)}>
              {isNewUser ? (
                <>
                  <div className="mb-1">
                    <div className="form-control">
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
                    <div className="form-control">
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
                    <div className="form-control">
                      <InputText
                        name="phone"
                        type="tel"
                        labelTitle="Phone"
                        containerStyle="mt-1"
                        control={control}
                        rules={{
                          required: "Phone is required",
                        }}
                      />
                    </div>
                    <div className="form-control">
                      <InputText
                        name="password"
                        type="password"
                        labelTitle="Password"
                        containerStyle="mt-1"
                        control={control}
                        rules={{
                          required: "Password is required",
                        }}
                      />
                    </div>
                    <div className="form-control">
                      <InputText
                        name="passwordConfirm"
                        type="password"
                        labelTitle="Confirm Password"
                        containerStyle="mt-1"
                        control={control}
                        rules={{
                          required: "Confirm Password is required",
                        }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="mb-4">
                  <div className="form-control w-full">
                    <InputText
                      name="phone"
                      type="tel"
                      labelTitle="Phone"
                      containerStyle="mt-1"
                      control={control}
                      rules={{
                        required: "Phone is required",
                      }}
                    />
                  </div>
                  <div className="form-control w-full">
                    <InputText
                      name="password"
                      type="password"
                      labelTitle="Password"
                      containerStyle="mt-4"
                      control={control}
                      rules={{
                        required: "Password is required",
                      }}
                    />
                  </div>
                </div>
              )}
              {!isNewUser ? <button
                type="submit"
                className="btn mt-2 w-full btn-primary"
                disabled={isLoading}
              >
                {isLoading ? "Login..." : "Login"}
                <span>{isLoading && <TbReload className={"animate-spin mt-1"} />}</span>
              </button> :
                <button
                  type="submit"
                  className="btn mt-2 w-full btn-primary"
                  disabled={signUpIsloading}
                >
                  {isLoading ? "Submit..." : "Submit"}
                  <span>{signUpIsloading && <TbReload className={"animate-spin mt-1"} />}</span>
                </button>
              }

              <HelperText className="cursor-pointer mt-1">
                <button type="button" onClick={showSignup}>
                  {isNewUser ? "Already have an Account, Login" : "Create Account"}
                </button>
              </HelperText>

              <ErrorText styleClass="mt-16">{theError}</ErrorText>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
