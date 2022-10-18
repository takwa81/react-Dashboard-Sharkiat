
import axios from 'axios';


export default function AuthUser(){
  
    const http = axios.create({
        baseURL:"http://localhost:8000/api",
        headers:{
            "Content-type" : "application/json",
            "X-Requested-With" : "XMLHttpRequest" ,
        }
    
    });
    return {
        http
    }
}