import { Link } from "react-router-dom";

const Post = () => {
    return(
        <>
            <h1>
                Page Post
            </h1>

            <Link to="/">
                <button>Back</button>
            </Link>
        </>
    )
}

export default Post;