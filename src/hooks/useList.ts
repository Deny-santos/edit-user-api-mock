import { useState, useEffect } from "react"
import axios from "axios"


export type userDetails = {
    name: string,
    city: string,
    avatar?: string
    id?: string
}

const useUsers = () => {
    const [userList, setUserList] = useState([])
    
    const getUsers = async () => {
        try {
            const response = await axios.get(`https://64794376a455e257fa6310e9.mockapi.io/users`)
            const data = response.data
            setUserList(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers()
    },[])

    return {
        getUsers, userList, setUserList
    }
}
export default useUsers