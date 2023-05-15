import HeaderMain from '../../components/HeaderMain';
import styles from './styles.module.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import More from '../../assets/more.svg'


const Feed = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/projects")
            .then((response) => {
                setPosts(response.data)
            })

            .catch(() => {
                console.log("Deu errrado")
            })

    }, [])

    function deletePost(id) {

        axios.delete(`http://localhost:5000/projects/${id}`)

        setPosts(posts.filter(post => post._id !== id))

    }


    return (
        <>
            <HeaderMain />

            <div className={styles.container_main}>
                <div className={styles.cards}>
                    {posts.map((post, key) => {

                        return (

                            <div className={styles.card} key={key} >

                                <header>
                                    <h2>{post.title}</h2>
                                    <img src={More} />
                                </header>

                                <div className={styles.line}></div>

                                <p>{post.description}</p>

                                <div className={styles.btns} >

                                    <div className={styles.btn_edit} >
                                        <Link to={{ pathname: `/edit/${post._id}` }} >
                                            <button>Edit</button>
                                        </Link>
                                    </div>

                                    <div className={styles.btn_readmore} >
                                        <Link to={{ pathname: `/lermais/${post._id}` }} >
                                            <button>Ler mais</button>
                                        </Link>
                                    </div>

                                    <div className={styles.btn_delete} >
                                        <button onClick={() => deletePost(post._id)} >delete</button>
                                    </div>

                                </div>
                            </div>
                        )

                    })}


                </div>

            </div>
        </>
    )
}

export default Feed;