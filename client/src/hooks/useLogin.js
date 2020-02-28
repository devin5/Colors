import {useState} from 'react'
import axios from 'axios'


export const useLogin = (history) => {
    const [form, setForm] = useState({})

    const change = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const submit = e => {
        e.preventDefault()
            axios.post("http://localhost:5000/api/login", form)
            .then(res => (
              localStorage.setItem("token", res.data.payload),
              history.push('/bubbles')
            ))
            .catch(err =>console.log(err))
       
      }


    return [form, change, submit]
} 

