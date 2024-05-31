import Description from "./component/description"
import Name from "./component/name"
import Prix from "./component/prix"
import Image from "./component/image"
import { Fragment, useRef, useState } from "react"


function Cart({children}){
    return(
        <div className="px-4 py-3 w-1/2 mb-12">
            <div className="border w-4/6 h-1/2 pb-5">
                {children}
            </div>
        </div>
    )
}

function Message({full}){
    let [prenom, setPrenom] = useState("")
    let prenomRef = useRef()
    const handlerClick = ()=>{
        setPrenom(prenomRef.current.value)
    }


    return(
        <div className="container mx-auto px-4 w-1/3 pb-16 flex justify-center items-center">
            <div>
            <p>entrez votre prenom</p>
            <div className="inline-block py-3">
                <input type="text" className="border border-blue-500 block my-2" ref={prenomRef} />
                <button type="button" className="border bg-blue-500 rounded-md hover:bg-blue-800 px-6 py-2" onClick={handlerClick}>envoyer</button>
            </div>
            <div className="rounded-full">
                <p className="mb-6">Bonjour {` ${prenom}`}</p>
                {prenom && <Image full={full}/>}
            </div>
            </div>
        </div>
    )
}

function App() {
    return(
        <div className="flex justify-around items-center">
        <Cart>
            <Image full={"rounded-md object-cover pb-3  h-2/5"}/>
            <div className="flex items-center justify-between pb-12 pt-3 mx-2">
            <Name />
            <Prix />
            </div>
            <Description />
        </Cart>
        <Message full={"rounded-full w-1/3"}/>
        </div>
    )
}


export default App