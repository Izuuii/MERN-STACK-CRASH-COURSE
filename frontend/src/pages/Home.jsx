import React, { useEffect, useState } from 'react'
import { getPosts } from '../api'
import BlogCard from '../components/BlogCard'

const Home = () => {
    const [posts, setPosts] = useState([]) // State to hold posts

    useEffect(() => {
        async function loadAllPosts() {
            const data = await getPosts()
            const sortedPosts = data.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
            setPosts(sortedPosts) // Set the sorted posts to state
        }
        loadAllPosts() // This function will be called when the component mounts
    }, []) // Empty dependency array ensures this runs once on mount

    return (
        <div className="max-w-screen-xl mx-auto px-4 py-10">
            {/* Render BlogCard for each post */}
            {posts.map((post) => (
                <div key={post._id} className="flex justify-center mb-6">
                    <div className="w-full max-w-2xl">
                        <BlogCard post={post} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home
