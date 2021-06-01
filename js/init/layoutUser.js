import renderStartPage from './renderStartPage.js';  
import attachListeners from './attachListeners.js';

import user from 'api/user.json' assert { type: "json" };

export default ()=>{
    renderStartPage(user);
    attachListeners();
};
