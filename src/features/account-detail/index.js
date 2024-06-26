import React from 'react'

const AccountDetail = () => {
  return (
<div className="p-6 items-center justify-center">
      <div className="max-w-3xl mx-auto">
        {/* {/ Profile Card /} */}
        <div className=" shadow rounded-lg p-6">
          <div className="flex items-center">
            <img className="w-16 h-16 rounded-full" src="https://via.placeholder.com/150" alt="Profile" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">Jack Adams</h2>
              <p className="text-gray-600">Product Designer</p>
              <p className="text-gray-600">Los Angeles, California, USA</p>
            </div>
            {/* <button className=" border border-gray-300 text-white py-2 px-4  rounded focus:outline-none focus:ring-2 "> */}

            <button className="ml-auto bg-orange-600 text-white px-4 py-2 hover:bg-orange-900 rounded-lg focus:ring-gray-300">
              Edit</button>
          </div>
        </div>

        {/* {/ Personal Information /} */}
        <div className="shadow rounded-lg p-6 mt-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <button className="bg-orange-600 text-white px-4 py-2 hover:bg-orange-900 rounded-lg focus:ring-gray-300">Edit</button>
          </div>
          <div className="mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600">First Name</label>
                <p className="text-gray-800">Jack</p>
              </div>
              <div>
                <label className="text-gray-600">Last Name</label>
                <p className="text-gray-800">Adams</p>
              </div>
              <div>
                <label className="text-gray-600">Email Address</label>
                <p classname="text-gray-800">jackadams@gmail.com</p>
              </div>
              <div>
                <label className="text-gray-600">Phone</label>
                <p className="text-gray-800">(213) 555-1234</p>
              </div>
              <div>
                <label className="text-gray-600">Bio</label>
                <p className="text-gray-800">Product Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountDetail