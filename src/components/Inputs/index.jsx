import styles from './styles.module.css';

const Inputs = ({ label, name}) => {
    return (
        <div className={styles.fields}>
            <label>{label}</label>
            <input type="text" name={name} />
            <p className={styles.error_message}></p>
        </div>
    )
}

export default Inputs