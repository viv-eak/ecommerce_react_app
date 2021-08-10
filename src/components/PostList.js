import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts}) => {

    return (
        <div>
            {posts.map((post) => {
                return <PostItem title={post.title} key={post.id} body={post.body} />
            })}
        </div>
    )
}

export default PostList;