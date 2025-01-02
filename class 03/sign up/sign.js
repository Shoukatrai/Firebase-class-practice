//import from firebase.js
import { app, auth, createUserWithEmailAndPassword, db, doc, setDoc } from "../firebase.js"



//geting elements
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const firstName= document.querySelector("#firstName")
const lastName= document.querySelector("#lastName")
const age= document.querySelector("#age")
const gender= document.querySelector("#gender")





//signup page 
const signUpHandler = async ()=>{
    try {
        const newUser = await createUserWithEmailAndPassword(auth , email.value, password.value);
        const userId = newUser.user.uid
        console.log(userId)
        const userData = await setDoc(doc(db , "users" ,userId ),{
            firstName: firstName.value,
            lastName: lastName.value,
            age: age.value,
            gender: gender.value,
        })
        
        
        window.location.href = "../index.html"




    } catch (error) {
        console.log(error.message)
        alert(error.code)
    }
}





window.signUpHandler = signUpHandler