// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwF0lBJFJ3wQGAB7Eo_UMmSBMxscWguxg",
    authDomain: "login-9dfe3.firebaseapp.com",
    projectId: "login-9dfe3",
    storageBucket: "login-9dfe3.appspot.com",
    messagingSenderId: "575104573151",
    appId: "1:575104573151:web:9d0aa6a8bc9799bb91d36a",
    measurementId: "G-JBWZS9C9B4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

function register(email, password, fullName, age) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    fullName,
                    email,
                    age,


                });
                alert('successfully register')
                console.log("Document written with id", docRef.id);
            } catch (e) {
                console.error("Error adding document", e);
                alert(e.message)
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message
            alert(errorMessage)
        });
}

function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('successfully login')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
}


export default register

export {
    register,
    login

}