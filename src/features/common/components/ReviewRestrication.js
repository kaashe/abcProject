import React from 'react';

export const ReviewRestrication = () => {
  // Retrieve the data from local storage and parse it as JSON
  const storageData = localStorage.getItem("user"); // Assuming 'user' is the key
  const userData = storageData ? JSON.parse(storageData) : null; // Parse the string to an object
  
  // Access requiredDeposite and stuckcommission
  const requiredDeposite = userData ? userData.requiredDeposite : null; 
  const stuckCommission = userData ? userData.stuckcommission : null;

  // console.log("Required Deposit:", requiredDeposite);
  // console.log("Stuck Commission:", stuckCommission);

  return (
    <div>
      <p>Required Deposit: {requiredDeposite !== null ? requiredDeposite : 'Not set'}</p>
      <p>Stock Commission: {stuckCommission !== null ? stuckCommission : 'Not set'}</p>
      <h1 align="center"><b>Contact To Customer Services</b></h1>
      <p>Congratulations you have received Stock bundle product.Please recharge the required deposit in your account. Then you will be allowed to give further reviews.</p>
    </div>
  );
};
