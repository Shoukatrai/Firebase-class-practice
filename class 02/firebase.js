 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
 import { getFirestore , collection, addDoc , getDocs} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBS0S8MBgCrfInHZZF8R8oqYH3x699GGzQ",
   authDomain: "test-project-c397d.firebaseapp.com",
   projectId: "test-project-c397d",
   storageBucket: "test-project-c397d.firebasestorage.app",
   messagingSenderId: "390964343700",
   appId: "1:390964343700:web:57358e1661ddeecc131581"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {
    app,
    db,
    collection, addDoc,
    getDocs
}