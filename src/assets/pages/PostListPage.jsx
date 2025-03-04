import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const PostListaPage = () => {

    const [posts, stePosts] = useState(null)

    const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

    const fetchData = () => {
        axios.get(`${baseApiUrl}/posts`)
            .then(res => {
                stePosts(res.data)
            })
            .catch(err => {
                console.log(err);

            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="container my-5">
                <div className="card">
                    <div className="card-body">
                        <h1>Elenco Posts</h1>
                        <ul className="list-group my-5">
                            {posts === null ?
                                (<h2>Loading...</h2>)
                                :
                                (
                                    posts.map(post => (
                                        <li key={post.id} className="list-group-item d-flex justify-content-between">
                                            <span>{post.title}</span>
                                            <Link className="btn btn-success" to={`/dettaglio-post/${post.id}`}>Vedi dettaglio</Link>
                                        </li>
                                    )
                                    )
                                )

                            }
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PostListaPage