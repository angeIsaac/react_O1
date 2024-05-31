import { product } from "./product";

export default function Image({full}){
    return(
        <img className={full} src={product.url} alt={product.nom}
        />
    )
}