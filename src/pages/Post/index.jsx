import styles from './styles.module.css';
import BackButton from '../../assets/back-button.svg'
import { Link } from "react-router-dom";

const Post = () => {
    return (
        <>
            <div className={styles.container_header}>
                <Link to="/">
                    <img src={BackButton} alt="Botão de voltar" />
                </Link>
            </div>
        </>
    )
}

export default Post;