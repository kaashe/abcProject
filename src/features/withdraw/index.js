import React from "react";
import InputText from "../../components/Input/InputText";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";
import { openModal } from "../common/modalSlice";

const WithDraw = () => {
  const { control, handleSubmit, getValues } = useForm({});
  const dispatch = useDispatch();
  const submitForm = (data) => {
    console.log(data);
    if (data) {
      withDraw();
    }
  };
  const withDraw = () => {
    dispatch(
      openModal({
        title: "Your Withdraw request was succesful!",
        bodyType: MODAL_BODY_TYPES.WITHDRAW_AMOUNT,
        extraObject: {},
      })
    );
  };
  return (
    <div className={`form-control w-56 flex flexr`}>
      <form onSubmit={handleSubmit(submitForm)}>
        <InputText
          name="amount"
          type={"number"}
          labelTitle="Amount"
          containerStyle="mt-4"
          control={control}
          rules={{
            required: "Amount is required",
          }}
        />
        <button type="submit" className="btn btn-sm mt-2 btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default WithDraw;
