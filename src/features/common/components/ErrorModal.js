import React from 'react';
import { useSelector } from 'react-redux';

const ErrorModal = () => {
  const { extraObject } = useSelector((state) => state.modal);
  console.log(extraObject?.error);
  return (
    <div>
      {extraObject?.error ? (
        <div className="error-message">
          {extraObject.error}
        </div>
      ) : (
        <div>No error message</div>
      )}
    </div>
  );
}

export default ErrorModal;
