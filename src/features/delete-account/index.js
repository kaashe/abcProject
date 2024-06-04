import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../common/modalSlice";
import { MODAL_BODY_TYPES } from "../../utils/globalConstantUtil";

const DeleteAccount = () => {
  const dispatch = useDispatch();
  const withDraw = () => {
    dispatch(
      openModal({
        title: "Are you sure you want to delete this account!",
        bodyType: MODAL_BODY_TYPES.DELETE_ACCOUNT,
        extraObject: {},
      })
    );
  };
  useEffect(() => {
    withDraw();
  }, []);
  return <div></div>;
};

export default DeleteAccount;
