"use client"
import axios from "axios"
import  { useRouter } from "next/navigation"


interface Props {
    params: { key: number }
}

export default function Delete({params}:Props){
    const router=useRouter()

    const handleDelete=(event:React.FormEvent)=>{
        event.preventDefault()
        axios
            .delete("/users/" +params.key)
            .then(res=>{
                 router.push("/")
            })
    }
    return<>
    <h1>Delete User No. {params.key}</h1>
     <button onClick={handleDelete}>delete</button>

    </>

}