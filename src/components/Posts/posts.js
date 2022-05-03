import {useEffect, useState} from "react";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            });
    }, []);

    return (
        <div className={'sup'}>
            <users/>
            <ul className={'zzz'}>
                {
                    posts.map(value => <li key={value.id}> {value.title}</li>)
                }
            </ul>
        </div>
    );
}