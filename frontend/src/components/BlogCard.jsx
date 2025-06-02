import React from 'react'

const BlogCard = ({post}) => { 
    return (
        <>
            <h2>{post.title}</h2>
            <h3>{post.description}</h3 >
            <p>{post.dateCreated}</p>
        </>
    )
}

export default BlogCard