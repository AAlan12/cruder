import styles from './styles.module.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.container_header}>
            <Link to="/">
                <img src={BackButton} alt="Botão de voltar" />
            </Link>
        </div>
    )
}

export default Header;