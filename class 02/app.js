import { addDoc, app, collection, db, doc, getDocs, updateDoc,deleteDoc } from "./firebase.js";

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
              <button class="me-3 btn btn-info" onclick = "updateData(this)" id = "${docs.id}">EDIT</button>
              <button class="me-3 btn btn-danger" onclick = "deleteNote(this)" id = "${docs.id}">DELETE</button>
          </div>
        </div>` 
        })
    } catch (error) {
        console.log(error)
    }

}


const updateData = async (ele)=>{
    console.log("updateData " ,ele.id)
    try {
        const editValue = prompt("Enter an edit value..");
        console.log(editValue)
        if(!editValue){
            alert("Invalid value!")
            return
        }
        await updateDoc(doc(db, "newNote" , ele.id), {
            todo: editValue
        })
        fetchingData()
    } catch (error) {
        console.log(error.message)
    }
}

const deleteNote = (element)=>{
    console.log("deleteNote" , element.id)
    deleteDoc(doc(db, "newNote" , element.id));
    fetchingData()
}



window.addNote = addNote
window.fetchingData = fetchingData 
window.updateData  = updateData  
window.deleteNote   = deleteNote   