//getting html elements
const email = document.querySelector("#email")
const password = document.querySelector("#password")

import { app, auth, signInWithEmailAndPassword } from "./firebase.js"

//signUp page
const loginHandler = async ()=>{
    try {
        await signInWithEmailAndPassword(auth , email.value , password.value)
        console.log(app , "login suucessful")
        window.location.href= "./dashboard.html"
    } catch (error) {
        console.log(error.message) 
        alert(error.code)   
    }
    
}



window.loginHandler = loginHandler