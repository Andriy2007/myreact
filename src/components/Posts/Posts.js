import { useEffect, useState } from 'react';


import { Post } from '../Post/Post';
import {postsService} from "../../service";

export const Posts = ({userId}) => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        postsService.getPostsByUserId(userId).then(({data}) => setPosts(data));
    }, []);

    return (
        <div>
            {
                posts
                    ? posts.map((post) => <Post key={post.id} post={post}/>)
                    : 'Loading...'
            }

        </div>
    );
}