import HeaderMain from '../../components/HeaderMain';
import styles from './styles.module.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Feed = () => {

    const [ posts, setPosts ] = useState([])

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

        setPosts(posts.filter(post => post._id !== id ))

    }


    return (
        <>
           <HeaderMain />

            <div className={styles.container_main}>
                <div className={styles.card}>
                    
                </div>

            </div>
        </>
    )
}

export default Feed;