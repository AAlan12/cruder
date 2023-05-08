import { Link } from "react-router-dom";

const Feed = () => {
    return(
        <>
            <h1>
                Page Feed
            </h1>

            <Link to="/post">
                <button>Add New Post</button>
            </Link>
        </>
    )
}

export default Feed;