import { onNavigate } from '../main.js';

export const Login = () => {
  const div = document.createElement('div');
  const title = document.createElement('h5');
  const button = document.createElement('button');
  const buttonBack = document.createElement('button');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  
  inputEmail.placeholder = 'E-mail';
  inputPass.placeholder = 'Password';
  inputPass.type = 'password';
  
  
  button.textContent = 'LOGIN';
  buttonBack.textContent = 'Back';
  title.textContent = 'Log in';
  
  button.addEventListener('click',()=>{
    onNavigate('/');
  });
  
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  div.append(title, inputEmail, inputPass, button, buttonBack);
  return div;
};
