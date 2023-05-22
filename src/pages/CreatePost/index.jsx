import { Form } from "../../components/Form";
import { api } from '../../lib/axios';
const navigate = useNavigate()
import "./styles.css";

export function CreatePost() {

  const navigate = useNavigate()

  function handleCreatePost(data) {
    api.post('/posts', data)
    navigate('/')
    // reset()
  }

  return (
    <div>
      <Form 
        title={'Criar publicação'} 
        txtButton={'Criar'} 
        onAction={handleCreatePost}/>
    </div>
  );
}