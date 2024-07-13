import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                        <p className="mb-8">We're here to help! If you have any questions, need assistance, or want to provide feedback,
                            please feel free to reach out to us. Our support team is dedicated to ensuring you have a
                            smooth and rewarding experience on Arkin Hype.</p>
                        <button className="bg-orange-600 border border-white text-white py-2 px-6 rounded hover:bg-orange-900 ">
                            Get in Touch
                        </button>
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <div className=" p-8 rounded-lg">
                            <p className="text-1xl font-bold mb-4">For general inquiries: info@arkinhype.com</p>
                            <p className="text-1xl font-bold mb-4">Forsupport and assistance: support@arkinhype.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
