import axios from 'axios';

const URL = 'http://localhost:3000';

export async function getPosts() {
    // http://localhost:3000/posts
    const response = await axios.get(`${URL}/posts`); 
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error fetching posts: ' + response.statusText);
    }
}

export async function getPost(id) {
    // Assuming you want to fetch a specific post by ID
    // http://localhost:3000/posts/12345
    const response = await axios.get(`${URL}/posts/${id}`); 

    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error fetching post: ' + response.statusText);
    }
}

export async function createPost(post) {
    // http://localhost:3000/posts
    const response = await axios.post(`${URL}/posts`, post); 

    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error creating post: ' + response.statusText);
    }
}

export async function updatePost(id, post) {
        // http://localhost:3000/posts/12345
    const response = await axios.put(`${URL}/posts/${id}`, post); 

    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error updating post: ' + response.statusText);
    }
}

export async function deletePost(id) {
    // http://localhost:3000/posts/12345
    const response = await axios.delete(`${URL}/posts/${id}`); 

    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Error deleting post: ' + response.statusText);
    }
}


//users
export async function getUser(id) {
    // Assuming you want to fetch a specific post by ID
    // http://localhost:3000/users/12345
    const response = await axios.get(`${URL}/users/${id}`); 

    if (response.status === 200) {
        return response.data;
    } else {
        return
    }
}

export async function createUser(user) {
    // http://localhost:3000/users
    const response = await axios.post(`${URL}/users`, user); 
    return response.data;
}

export async function updateUser(id, user) {
    // http://localhost:3000/users/12345
    const response = await axios.put(`${URL}/users/${id}`, user); 
    return response.data;
}