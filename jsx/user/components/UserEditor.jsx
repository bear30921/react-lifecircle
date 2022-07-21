import React from 'react'

const UserEditor = ({ user, handler }) => {
    const { id, name, email, description} = user

    let textareaHandler = (e) => {
        const {name, value} = e.target
        handler("user", {...user, [name]: value})
    }

    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{email}</p>
            <textarea
                name="description"
                cols="100"
                rows="10"
                value={description}
                onChange={textareaHandler}
            ></textarea>
        </div>
    )
}

export default UserEditor;