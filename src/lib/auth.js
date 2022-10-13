/* eslint-disable import/no-unresolved */
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from '../lib/config.js'
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';

export const auth = getAuth();
export const newUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const user = auth.currentUser;
if (user !== null) {
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}

export const existingUserAccess = (email, password) => signInWithEmailAndPassword(auth, email, password)

