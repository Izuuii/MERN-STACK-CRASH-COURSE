import { useState, React } from 'react'
import { createUser } from '../api'

const CreateUser = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value})
    }

    async function handleSubmit(){
        let response = await CreateUser(user)
        if (response.status !== 200) {
            alert("Error creating user: " + response.statusText)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder={"Name"} onChange={handleChange} name="name" required maxLength={40} />
            <input placeholder={"Email"} onChange={handleChange} name="email" required maxLength={40} />
            <input placeholder={"Password"} onChange={handleChange} name="password" required maxLength={40} />
            <button type="submit">Create User</button>
        </form>
    )
}

export default CreateUser