import React from 'react';

const ContactUs = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                        <p className="mb-8">We're here to help! If you have any questions, need assistance, or want to provide feedback,
                            please feel free to reach out to us. Our support team is dedicated to ensuring you have a
                            smooth and rewarding experience on Arkin Hype.</p>
                        <button className="bg-orange-600 border border-white text-white py-2 px-6 rounded hover:bg-orange-900">
                            Get in Touch
                        </button>
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <div className="p-8 rounded-lg">
                            <p className="text-1xl font-bold mb-4">For general inquiries: info@arkinhype.com</p>
                            <p className="text-1xl font-bold mb-4">For support and assistance: support@arkinhype.com</p>
                            <form className="space-y-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" defaultValue={'info@arkinhype.com'} className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea placeholder="Message" className="textarea textarea-bordered w-full"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-full">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
