import { onNavigate } from '../main.js';
import { existingUserAccess } from '../lib/auth.js';
import { savePost, getPosts } from '../lib/firestore.js';

export function Home() {
  //Generador de posts
  const homeContent = document.createElement('div');
  homeContent.classList.add('homeContent')

  const lotoBoxContainer = document.createElement('div');
  lotoBoxContainer.classList.add('lotoBoxContainer');

  const postAQuestion = document.createElement('label');
  postAQuestion.classList.add('postAQuestion');
  postAQuestion.textContent = 'Ask your botany-related question!';

  const postTextBox = document.createElement('textarea');
  postTextBox.classList.add('postTextBox');
  postTextBox.placeholder = 'Write your question here';

  const submitButton = document.createElement('button');
  submitButton.classList.add('submitButton');
  submitButton.textContent = 'Submit Question';
  lotoBoxContainer.append(postAQuestion, postTextBox, submitButton)

  //Función para cargar los posts
  window.addEventListener('DOMContentLoaded', async (e)=>{
    const posts = await getPosts(e.target.data);
    console.log(posts)
  });

  submitButton.addEventListener('click', (e) => {
    //e.preventDefault();
    const mail = 'mailDeUsuario';
    const post = postTextBox.value;
    
    savePost(mail, post);
    postTextBox.value = '';
  });


  //Contenedor de posts... meter este contenedor en en una const de función flecha, 
  //integrar de manera dinámica la información recuperada de Firebase,
  //'return postContainer', ir añadiendo elementos conforme se van creando posts
/*   const postContainer = () => {
    const div = document.createElement('div');
    const userEmail = document.createElement('h2');
    const postContent = document.createElement('p');

    div.append(userEmail, postContent)

    return div
  } */



  homeContent.append(lotoBoxContainer);

  return homeContent;
}

//revisar imports en index.js