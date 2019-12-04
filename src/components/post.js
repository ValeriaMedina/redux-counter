import React from 'react'

function Post({ title }) {
    return (
        <p style={{ background: "#98ddff", padding: "15px" }}><b>Post title is:</b>  {title}</p>
    )
}

export default Post