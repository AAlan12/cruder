import { useParams } from "react-router-dom";
import { Form } from "../../components/Form";
import { api } from '../../lib/axios';
import { useEffect } from "react";

export function UpdatePost() {

    const { id } = useParams()

    function handleUpdatePost(data) {
        api.put(`/posts/${id}`, data);
    }

    // useEffect(() => {
    //     api.get(`/posts/${id}`)
    //     .then(response => console.log(response.data))
    // }, [])

    return (
        <div>
            <Form 
                title={'Editar publicação'} 
                txtButton={'Editar'} 
                onAction={handleUpdatePost} />
        </div>
    )
}