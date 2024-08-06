import Database from 'better-sqlite3'
import { InputUser, IUser } from './types'
const db = new Database('social.db')

export const addUser = (user:InputUser):Database.RunResult => {
    return db
           .prepare(`
                INSERT INTO users(name, surname, salary)
                VALUES(@name, @surname, @salary)
            `).run(user)
}

export const getAllUsers = () :IUser[] => {
    return db.prepare(`SELECT * FROM users`).all() as IUser[]
}

export const updateUser=(user:InputUser,id:number)=>{
    return db
            .prepare(`UPDATE users SET name=?,surname=?,salary=? WHERE id=?`)
            .run(user.name,user.surname,user.salary,id)

}

export const getUserById=(id:number)=>{
   return db.prepare("SELECT * FROM users WHERE id=?").get(id) as IUser
  

}

export const deleteUser=(id:number)=>{
    const deleted=db.prepare("DELETE FROM users WHERE id=?")
    return deleted.run(id)
}