import styles from './styles.module.css';
import { Link } from "react-router-dom";

const Feed = () => {
    return (
        <>
            <div className={styles.container_header}>
                <div className={styles.logo}>
                    <h1>
                        CRUder
                    </h1>
                </div>

                <div className={styles.btn_new}>
                    <Link to="/post">
                        <button>Add New Post</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Feed;