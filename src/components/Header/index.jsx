import { useNavigate } from 'react-router-dom'
import './styles.css'
import Logo from '/logo-adc.svg'  

export function Header() {

    const navigate = useNavigate();

    return (
        <header>
            <img src={Logo} alt="" />
            <button onClick={() => navigate('/createPost')} >Criar post</button>
        </header>
    )
}