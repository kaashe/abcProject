import LandingIntro from "./LandingIntro";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ModalLayout from "../../containers/ModalLayout";
import { useLogin } from "../../app/custom-hooks/login/useLogin";
import ErrorText from "../../components/Typography/ErrorText";
import InputText from "../../components/Input/InputText";
import HelperText from "../../components/Typography/HelperText";
import { useEffect, useState } from "react";
import { showNotification } from "../common/headerSlice";
import { openModal, closeModal } from "../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";

function Login() {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [isNewUser, setIsNewUser] = useState(false);
  const [theError, setTheError] = useState('');
  const {
    login,
    isLoading,
    isError,
    error,
    signUphandler,
    signUpisSuccess,
    signUpIsloading,
    signUpisError,
    signUpError,
  } = useLogin();

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
      photo: ["3fdfef.png"],
    },
  });

  const showSignup = () => {
    setIsNewUser(!isNewUser);
    reset();
    setTheError('');
    dispatch(closeModal());
  };

  const submitForm = async (data) => {
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
        const response = await signUphandler(formData);
        localStorage.setItem('access_token', response?.token);
        // window.location.href = "/app/dashboard";
      } else {
        await login(data);
      }
    } catch (err) {
      console.error('Error in form submission:', err);
      setTheError(err.message);
      openErrorModal(err.message);
    }
  };

  useEffect(() => {
    if (signUpisSuccess) {
      dispatch(showNotification({ message: "User Created!", status: 1 }));
    } else if (isError) {
      setTheError(error?.data?.message || "An error occurred");
      openErrorModal(error?.data?.message || "An error occurred");
    } else if (signUpisError) {
      setTheError(signUpError?.data?.message || "An error occurred");
      openErrorModal(signUpError?.data?.message || "An error occurred");
    }
  }, [signUpisSuccess, signUpisError, signUpError, isError, error, dispatch]);

  const openErrorModal = (errorMessage) => {
    dispatch(
      openModal({
        title: "Please fix the below error:",
        bodyType: MODAL_BODY_TYPES.OPEN_ERROR_MODAL,
        extraObject: { error: errorMessage },
      })
    );
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      {isOpen && <ModalLayout />}
      <div className="card mx-auto w-full max-w-5xl shadow-xl">
        <div className="grid md:grid-cols-2 grid-cols-1 bg-base-100 rounded-xl">
          <div>
            <LandingIntro />
          </div>
          <div className="py-20 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              {isNewUser ? "Create Account" : "Login"}
            </h2>
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
              <button
                type="submit"
                className="btn mt-2 w-full btn-primary"
              >
                {isNewUser ? "Submit" : "Login"}
              </button>
              <HelperText className="cursor-pointer mt-1">
                <button type="button" onClick={showSignup}>
                  {isNewUser ? "Already have an Account, Login" : "Create Account"}
                </button>
              </HelperText>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
