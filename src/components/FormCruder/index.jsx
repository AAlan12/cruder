import Inputs from '../Inputs';
import styles from './styles.module.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const validationPost = yup.object().shape({
    title: yup.string().required("O título é obrigatório").max(40, "O título precisa ter menosde 40 caracteres"),
    description: yup.string().required("A descrição é obrigatório").max(150, "A descrição precisa ter menosde 150 caracteres"),
    content: yup.string().required("O conteúdo é obrigatório").max(500, "O conteúdo precisa ter menosde 500 caracteres")
})

const FormCruder = () => {
    let history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    })

    const addPost = data => axios.post("application/json", data)
        .then(() => {
            console.log("Deu tudo certo")
            history.push("/")
        })
        .catch(() => {
            console.log("DEU ERRADO")
        })

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