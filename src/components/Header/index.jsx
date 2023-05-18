import './styles.css'
import Logo from '/logo-adc.svg'  

export function Header() {
    return (
        <header>
            <img src={Logo} alt="" />
        </header>
    )
}