import React from 'react'

const WithdrawAmountModal = ({closeModal}) => {
  return (
    <div className="text-center">
      <div className="modal-action">
        <button
          type="button"
          className="btn btn-sm btn-glass"
          onClick={() => closeModal()}
        >
          Okay
        </button>
        {/* <button
          type="submit"
          // disabled={isLoading || updateIsLoading}
          className="btn btn-sm btn-primary px-6"
        >
          Confirm
        </button> */}
      </div>
    </div>
  )
}

export default WithdrawAmountModal