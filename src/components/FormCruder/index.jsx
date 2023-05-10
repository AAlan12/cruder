import Inputs from '../Inputs';
import styles from './styles.module.css';

const FormCruder = () => {
    return (
        <form onSubmit={handleSubmit(addPost)}>
            <Inputs label="Title" name="title" />

            <Inputs label="Description" name="description" />

            <Inputs label="Content" name="content" />

            <div className={styles.btn_post}>
                <button type='submit'>Submit</button>
            </div>

        </form>
    )
}

export default FormCruder