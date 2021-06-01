import renderStartPage from './renderStartPage.js';
import attachListeners from './attachListeners.js';

const user = await fetch('api/user.json')
    .then(response => response.json());

export default ()=>{
    renderStartPage(user);
    attachListeners();
};