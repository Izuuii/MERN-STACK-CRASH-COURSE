import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">About Us</h2>

                <div className="mb-8">
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        Welcome to our platform! We are passionate about empowering users to share their thoughts,
                        ideas, and stories through intuitive and engaging blogging experiences. Whether you're a writer,
                        developer, or curious reader, we’ve built this space to make publishing accessible to everyone.
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">🌟 Our Mission</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Our mission is to democratize content creation by offering a user-friendly blogging platform
                        that promotes creativity, simplicity, and impact. We believe every voice matters and aim to
                        amplify stories that inspire and connect communities.
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">💡 What We Use</h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                        <li>ReactJS for a dynamic user interface</li>
                        <li>Tailwind CSS & Flowbite for sleek, modern styling</li>
                        <li>RESTful APIs for backend communication</li>
                        <li>React Router for seamless navigation</li>
                    </ul>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow mt-10">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">✨ Get in Touch</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Have feedback or suggestions? We’d love to hear from you.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About
