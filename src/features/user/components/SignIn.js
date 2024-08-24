import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ModalLayout from "../../../containers/ModalLayout";
import { useLogin } from "../../../app/custom-hooks/login/useLogin";
import { TbReload } from "react-icons/tb";
import { useCallback, useEffect, useState } from "react";
import { closeModal, openModal } from "../../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../../utils/globalConstantUtil";
import { showNotification } from "../../common/headerSlice";
import InputText from "../../../components/Input/InputText";
import ErrorText from "../../../components/Typography/ErrorText";
import LandingIntro from "../LandingIntro";

function SignIn() {
    const { isOpen } = useSelector((state) => state.modal);
    const dispatch = useDispatch();
    const [theError, setTheError] = useState('');
    const {
        login,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useLogin();
    console.log(isSuccess, 'isSuccess');
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: "",
            photo: "3fdfef.png",
        },
    });



    const submitForm = async (data) => {
        try {
            const { email, photo, ...payload } = data;
            console.log(payload);
            const response = await login(payload);
            sessionStorage.setItem('access_token', response?.token);

        } catch (err) {
            console.error('Error in form submission:', err);
            setTheError(err.message);
            openErrorModal(err.message);
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
        if (isSuccess) {
            dispatch(showNotification({ message: "Logged in Succesfuly!", status: 1 }));
            window.location.href = "/app/dashboard";
        }
        else if (isError) {
            setTheError(error?.data?.message || "An error occurred");
            openErrorModal(error?.data?.message || "An error occurred");
        }
    }, [isSuccess, isError, error, dispatch, openErrorModal]);

    return (
        <div className="">
            {isOpen && <ModalLayout onClose={closeErrorModal} error={theError} />}
            <div className="card mx-auto w-full max-w-5xl">
                <h2 className="text-2xl font-semibold mb-2 text-center">
                    {"Login"}
                </h2>
                <form onSubmit={handleSubmit(submitForm)}>

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
                    <button
                        type="submit"
                        className="btn mt-2 w-full btn-primary"
                        disabled={isLoading}
                    >
                        {isLoading ? "Login..." : "Login"}<span>{isLoading && <TbReload className={"animate-spin mt-1"} />}</span>
                    </button>

                    <ErrorText styleClass="mt-16">{theError}</ErrorText>
                </form>
            </div>
        </div>
    );
}

export default SignIn
