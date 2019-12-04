import React from 'react'
import Button from '../components/button'
import { connect } from "react-redux";

import PostsWrapper from "../components/postsWrapper"
import Post from '../components/post'

import { getPosts } from "../redux/actions";


class Posts extends React.Component {
    getPosts = () => {
        this.props.getPosts();
    };

    showPosts = () => {
        const posts = this.props.posts.map(post => <Post key={post.id} title={post.title} />)
        return posts
    }

    render() {
        console.log('this.props on Posts Container: ', this.props)
        const { posts } = this.props
        return (
            <PostsWrapper>
                <Button onClick={this.getPosts} text="Click here to get posts" />
                {posts && this.showPosts()}
            </PostsWrapper>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getPosts: () => dispatch(getPosts())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)