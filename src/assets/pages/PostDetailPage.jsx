import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

const PostDetailPage = () => {

    const { id } = useParams()
    const baseApiUrl = import.meta.env.VITE_BASE_API_URL;
    const [post, setPost] = useState(null)
    const navigate = useNavigate()

    const fetchData = () => {
        axios.get(`${baseApiUrl}/posts/${id}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
                console.log(post);
            })
    }

    const handleDeletPost = () => {
        axios.delete(`${baseApiUrl}/posts/${id}`)
            .then(res => {
                navigate(`/elenco-post`)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h2>{post?.title}</h2>
                        <img src={`${baseApiUrl}${post?.image}`} alt={post?.title} />
                        <br />
                        <p className="mt-1 text-primary">
                            <strong>{post?.tags.join(", ")}</strong>
                        </p>
                        <span>{post?.content}</span>
                        <br />
                        <div className="mt-5 d-flex justify-content-evenly">
                            <button className="btn btn-warning" onClick={() => navigate(-1)} >Torna indietro</button>
                            <button className="btn btn-danger" onClick={handleDeletPost}>Elimina</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostDetailPage