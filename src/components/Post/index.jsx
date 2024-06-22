import './styles.css'
export default function Post({title,description}){
    return(
        <ul>
            <li>
                <h2>{title}</h2> {/*Assim deixa dinâmico*/}
                <p>{description}</p>
            </li>  
        </ul>
    )
}