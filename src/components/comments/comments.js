import {useEffect, useState} from "react";

export default function Comments() {

    let [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            });
    }, []);
    return (
        <div className={'sup'}>
            <ul>
                {
                    comments.map(value => <li key={value.id}> {value.name}</li>)
                }
            </ul>
        </div>
    );
}