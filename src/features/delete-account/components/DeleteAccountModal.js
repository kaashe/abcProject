import React from "react";
import { useDeleteUserMutation } from "../../account-detail/accountSlice";

const DeleteAccountModal = ({ closeModal }) => {
  
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();


  const handleDeleteClick = async () => {
    try {
      await deleteUser();
      // Handle successful deletion, e.g., log out user or redirect to a different page
      console.log("Account deleted successfully");
      // For example, you might want to redirect to the login page
      // window.location.href = "/login";
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("Failed to delete account:", error);
    }
    closeModal();
  };

  return (
    <div className="text-center">
      <div className="modal-action">
        <button
          type="button"
          className="btn btn-sm btn-glass"
          onClick={() => closeModal()}
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleDeleteClick}
          // disabled={isLoading || updateIsLoading}
          className="btn btn-sm btn-primary px-6"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
