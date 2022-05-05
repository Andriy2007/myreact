import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "../Button/Button"


const Post = ({post}) => {
    useNavigate();
    const {id, title} = post;
    return (
        <div>
            {id} -- {title} <Button to={`${id}`} state={post}>get Details</Button>
        </div>
    );
};
export default Post;