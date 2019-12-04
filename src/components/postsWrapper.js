import React from 'react'

function PostsWrapper(props) {
    return (
        <div style={{ marginTop: "40px" }}>
            This is the Posts Container
            <br />
            <br />
            {props.children}
        </div>
    )
}

export default PostsWrapper