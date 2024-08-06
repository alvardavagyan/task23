import { updateUser,deleteUser } from "@/lib/api"

interface Props{
    params: {key: number}
}

export const PUT = async (req:Request, {params}:Props ) => {
    const body = await req.json()
    const result=updateUser(body,params.key)
   
        return Response.json(result) 
    }
   
    export const DELETE = async (req:Request, { params }: Props) => {
        const result = deleteUser(params.key)
        return Response.json(result)
    
    }

