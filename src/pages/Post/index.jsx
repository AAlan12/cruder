import styles from './styles.module.css';
import Header from '../../components/Header';
import FormCruder from '../../components/FormCruder';

const Post = () => {
    return (
        <>
            <Header />

            <main>
                 <div className={styles.container_card}>
                    <h1>Create Post</h1>
                    <div className={styles.line_post}></div>

                    <div className={styles.card}>
                        <FormCruder />
                    </div>
                 </div>
            </main>
        </>
    )
}

export default Post;