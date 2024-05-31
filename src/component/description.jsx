import { product } from "./product";

export default function Description(){
    return(
        <p className="text-justify">{product.description}</p>
    )
}