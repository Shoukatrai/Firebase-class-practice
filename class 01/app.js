const addbtn = document.querySelector("#addbtn");
const getbtn= document.querySelector("#getbtn");
const setbtn= document.querySelector("#setbtn");
const deletebtn= document.querySelector("#deletebtn");

import { app,db , collection, addDoc  ,getDocs,doc, setDoc , deleteDoc } from "./firebase.js";


// adding data

const addData = async ()=>{
    const userCollection = collection(db,"users");
    
    const addData = await addDoc(userCollection, {
        name: "Shoukat Rai",
        age: 20,
        id: "BIT-23S-032"
    })
  
}


// Reading Data
const getData = async ()=>{
    const gotData = await getDocs(collection(db, "users"));
    
    gotData.forEach((response)=>{
        console.log(response.data())
    })
}

//setting data
const setData = async ()=> {
    try {
        const editData = await setDoc(doc(db, "users", "RaDVRD5vffmJEhpWmk8p"), {
            name: "Shoukat Umedani",
            age: 18,
            id: "BIT-23S-032"
        });
        console.log("Data successfully set:", editData);
    } catch (error) {
        console.error("Error setting document: ", error);
    }
}


//deleting data
const deleteData = async ()=>{
    await deleteDoc((db, "users" , "RaDVRD5vffmJEhpWmk8p"))
} 
deletebtn.addEventListener("click", deleteData)
addbtn.addEventListener("click", addData)
getbtn.addEventListener("click", getData)
setbtn.addEventListener("click", setData)