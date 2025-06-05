import React, { useState } from 'react'
import { verifyUser } from '../api'
import { useNavigate } from 'react-router-dom'

const Login = ({ noFullScreen, onToggle }) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await verifyUser(user);
            if (response && response.token) {
            sessionStorage.setItem('User', response.token);
            navigate('/home');
            alert("Login successful!");
            } else {
                alert("Login failed: No token received.");
            }
        } catch (err) {
            const errorMsg = err.response?.data?.error || err.message;
            alert("Login failed: " + errorMsg);
        }
    }

    return (
        <div className={`${noFullScreen ? '' : 'min-h-screen flex items-center justify-center'} bg-gray-50 dark:bg-gray-900 px-4 py-8`}>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-5"
            >
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white text-center">
                    Login
                </h2>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    maxLength={40}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    maxLength={40}
                    required
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                >
                    Login
                </button>

                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={onToggle}
                        className="text-blue-600 hover:underline text-sm"
                    >
                        Don't have an account? Sign Up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login