import React from 'react'

const ErrorView = ({error}) => {
    return (<h1>Error: {error.message}</h1>)
}

export default ErrorView