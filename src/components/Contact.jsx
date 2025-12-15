import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-10">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="w-full p-2 border border-gray-300 rounded"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;