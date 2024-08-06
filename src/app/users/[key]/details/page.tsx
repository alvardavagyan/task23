"use client"
import { InputUser, IUser } from "@/lib/types"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


interface Props {
    params: { key: number }
}

export default function Page({ params }: Props) {

    const router = useRouter()
    const[user,setUser]=useState<InputUser>({
                 name:"",
                 surname:"",
                 salary:0
             })


    const handleUpdate = (event:React.FormEvent) => {
        event.preventDefault()
        axios
            .put("/users/" + params.key, user)
            .then(res => {
                router.push("/")
            })
    }

   

    
    return <>
       
            <h1 >Update User No. {params.key}</h1>
                <div >
                    <form  onSubmit={handleUpdate}>

                        <div >
                            <input
                                type="text"
                                placeholder="name"
                                name="name"
                                value={user.name}
                                onChange={e => setUser({ ...user, name: e.target.value })}

                            />
                        </div>
                        <div >
                            <input
                                type="text"
                                placeholder="surname"
                                name="surname"
                                value={user.surname}
                                onChange={e => setUser({ ...user, surname: e.target.value })}
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder="salary"
                                name="salary"
                                value={user.salary}
                                onChange={e => setUser({ ...user, salary: +e.target.value })}
                            />
                        </div>
                        <button>update</button>
                    </form>
                </div>
            
            </>
    
}

