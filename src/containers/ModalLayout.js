import { MODAL_BODY_TYPES } from "../utils/globalConstantUtil";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/common/modalSlice";
import ConfirmationModalBody from "../features/common/components/ConfirmationModalBody";
import ReviewModelBody from "../features/common/components/ReviewModelBody";
import WithdrawAmountModal from "../features/withdraw/components/WithdrawAmountModal";
import DeleteAccountModal from "../features/delete-account/components/DeleteAccountModal";
import ErrorModal from "../features/common/components/ErrorModal";

function ModalLayout() {
  const { isOpen, bodyType, size, extraObject, title } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();

  const close = (e) => {
    dispatch(closeModal(e));
  };
  return (
    <>
      {/* The button to open modal */}
      {/* Put this part before </body> tag */}
      <div className={`modal ${isOpen ? "modal-open" : ""}`}>
        <div className={`modal-box  ${size === "lg" ? "max-w-5xl" : ""}`}>
          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={() => close()}
          >
            ✕
          </button>
          <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>
          {/* Loading modal body according to different modal type */}
          {
            {
              [MODAL_BODY_TYPES.CONFIRMATION]: (
                <ConfirmationModalBody
                  closeModal={close}
                  extraObject={extraObject}
                />
              ),
              [MODAL_BODY_TYPES.OPEN_REVIEW]: (
                <ReviewModelBody closeModal={close} extraObject={extraObject} />
              ),
              [MODAL_BODY_TYPES.OPEN_ERROR_MODAL]: (
                <ErrorModal closeModal={close} extraObject={extraObject} />
              ),
              [MODAL_BODY_TYPES.WITHDRAW_AMOUNT]: (
                <WithdrawAmountModal
                  closeModal={close}
                  extraObject={extraObject}
                />
              ),
              [MODAL_BODY_TYPES.DELETE_ACCOUNT]: (
                <DeleteAccountModal
                  closeModal={close}
                  extraObject={extraObject}
                />
              ),

              [MODAL_BODY_TYPES.DEFAULT]: <div></div>,
            }[bodyType]
          }
        </div>
      </div>
    </>
  );
}
export default ModalLayout;
