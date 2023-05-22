import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./styles.css";

const postSchema = yup.object({
  title: yup.string().required('Informe o campo título'),
  description: yup.string().required('O campo descrição não pode ser vazio'),
  content: yup.string().required('O campo conteúdo não pode ser vazio'),
})


export function Form({ title, txtButton, onAction }) {

  const { register, handleSubmit, reset, formState: {errors} } = useForm({
    resolver: yupResolver(postSchema)
  })

  return (
    <form onSubmit={handleSubmit(onAction)}>
      <h2>{title}</h2>
      <div className="field">
        <input placeholder="Título" {...register("title")} />
        {errors.title?.message}
      </div>

      <div className="field">
        <input placeholder="Descrição" {...register("description")} />
        {errors.description?.message}
      </div>

      <div className="field">
        <textarea placeholder="Conteúdo" {...register("content")} />
        {errors.content?.message}
      </div>

      <button type="submit">{txtButton}</button>
    </form>
  );
}