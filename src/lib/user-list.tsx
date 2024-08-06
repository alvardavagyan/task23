"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { IUser } from "./types"
import axios from "axios"

export const UserList = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {

        axios
            .get("/users")
            .then(res => {
                setUsers(res.data)
            })


    }, [])
    return <>
        <h3>UserList</h3>
        <Link href="/users/add">Add User</Link>
        {
            users.map(elm => <div key={elm.id} style={{ marginTop: 30, background: 'lightgray' }}>
                <p>{elm.name} {elm.surname}</p>
                <strong>{elm.salary} AMD</strong>
                <Link href={"/users/" + elm.id + "/details"}>account</Link>
                <div>
                    <Link href={"/users/" + elm.id + "/delete"}>delete</Link>
                </div>
            </div>)
        }
    </>
}
