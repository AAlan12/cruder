import styles from './styles.module.css';
import Header from '../../components/Header';

const Post = () => {
    return (
        <>
            <Header />

            <main>
                 <div className={styles.container_card}>
                    <h1>Create Post</h1>
                 </div>
            </main>
        </>
    )
}

export default Post;