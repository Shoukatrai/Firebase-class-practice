import { addDoc, app, collection, db, getDocs } from "./firebase.js";

//getting elements from html
const inputNote = document.querySelector("#inputNote");
const cardParent = document.querySelector("#cardParent")
//adding data
const addNote = async ()=>{
    try {
     if(!inputNote.value){
        alert("Enter any task..")
        return
     }
    const noteObj = {
        todo:inputNote.value,
    }
    
    // const addingData = await addDoc(newCollection , {
    //     newNote: inputNote.value
    // })
    const addingData = await addDoc(collection(db, "newNote"), noteObj)
    inputNote.value = ""
    console.log(addingData)  
    fetchingData() 
    } catch (error) {
        console.log(error.message)
    }

}

const fetchingData = async ()=>{
    try {
        const querySnapshot = await getDocs(collection(db, "newNote"));
        cardParent.innerHTML = ""
        querySnapshot.forEach((docs)=>{
            console.log(docs.id)
            console.log(docs.data())
            //render UI
            cardParent.innerHTML += `<div class="card p-3 mt-3 d-flex justify-content-between">
            ${docs.data().todo}
          <div class="btns">
              <button class="me-3 btn btn-info">EDIT</button>
              <button class="me-3 btn btn-danger">DELETE</button>
          </div>
        </div>` 
        })
    } catch (error) {
        console.log(error)
    }

}

window.addNote = addNote
window.fetchingData = fetchingData 