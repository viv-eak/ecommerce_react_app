import React from 'react';

const PostItem = ({title, body}) => {
    return (<div style={{margin: 10}}>
        <div style={{ boxShadow: "3px 2px 2px 3px #9E9E9E"}}>
            <h3>{`Title - ${title}`}</h3>
            <p>{`Body - ${body}`}</p>
        </div>
    </div>)
}

export default PostItem;