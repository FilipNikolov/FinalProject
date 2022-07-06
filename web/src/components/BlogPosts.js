import { useState } from "react";

export const Blogposts = () => {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        try {
            let res = await fetch('http://localhost:10002/api/v1/recipes', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    // 'authorization': `bearer ${localStorage.getItem('jwt')}`
                }
            });
            let data = await res.json();
            setPosts(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <button onClick={getPosts}>get posts</button>
            {posts.map(p => {
                return (
                    <h1 key={p._id}>{p.title}</h1>
                )
            })}
        </div>
    )
};
