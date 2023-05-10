import styles from './styles.module.css';

const FormCruder = () => {
    return (
        <form onSubmit={handleSubmit(addPost)}>
            <div className={styles.fields}>
                <label>Title</label>
                <input type="text" name='title' />
                <p className={styles.error_message}></p>
            </div>

            <div className={styles.fields}>
                <label>Description</label>
                <input type="text" name='description' />
                <p className={styles.error_message}></p>
            </div>

            <div className={styles.fields}>
                <label>Content</label>
                <input type="text" name='content' />
                <p className={styles.error_message}></p>
            </div>

            <div className={styles.btn_post}>
                <button type='submit'>Submit</button>
            </div>

        </form>
    )
}

export default FormCruder