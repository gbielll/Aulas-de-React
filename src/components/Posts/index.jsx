import React from 'react';
import Post from '../Post';
import postsData from '../../posts.json';
import './styles.css'

/*ele cria uma variável 'postData'  de posts.json e retorna ela em uma função map, em um post
 (onde recebe os valores) junto com um index (q acho q seria os índices/id de cada post). 
 Mas percebi com essa 'key' ele ja vai rodando todos os indices do array posts (criado no json), 
 sem precisar ficar repetindo varias vezes a tag Post e informar os indices [0],[1], ...,[n] 

 pode ser feito dessa forma aqui, onde no post ja vai logo os valores e o indece

 {postsData.posts.map((post)=>{
                return <Post title={post.title} description={post.description}/>
})}


// deixe o nome dos arquivos de index, pois ele ja acha
*/

export default function Posts() {
    return (
        <ul>
            {postsData.posts.map((post, index) => (
                <Post key={index} title={post.title} description={post.description} />
            ))}
        </ul>
    );
}
