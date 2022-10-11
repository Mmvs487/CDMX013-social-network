import { getFirestore, collection, addDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
import { app } from '../lib/config.js'

const db = getFirestore(app);

export const savePost = (mail, post)=>{
    addDoc(collection(db, 'posts'), {
      mail,
      post
    });
    }
//export const posts = getDoc(collection(db, 'posts'))
export const getPosts = () => getDoc(doc(db, 'posts'));