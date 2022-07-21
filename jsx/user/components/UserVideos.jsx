import React from 'react'

const UserVideos = ({ likes }) => {
    return (<div>
        {
            likes.map((videoUrl) => {
                return (<iframe src={videoUrl} key={videoUrl}></iframe>)
            })
        }
    </div>)
}


export default UserVideos;