import { authenticate, loadClient } from './auth';
import { elements } from './base';
import Search from './model/Search';
import * as searchView from './view/searchView';

const controlAuth = async () => {
    //create new auth
    loadClient();
    
    const authSuccess = await authenticate();
    
    if(authSuccess){
        removeAuth();
        displaySearchForm();
    }
    
};

//authorizes the user to be able to use the
//buttons to interact with the youtube api
document.querySelector(elements.authBtn).addEventListener('click', controlAuth);

const removeAuth = () => {
    document.querySelector(elements.authP).style.display = 'none';
};

const displaySearchForm = () => {
    document.querySelector(elements.search).style.display = 'inline';
};

const showAuthFailure = () => {
    document.querySelector(elements.authP).innerHTML = 'Failed Authentication!';
    document.querySelector(elements.authBtn).style.display = 'none';
};

const controlSearch = async () => {
    
    const query = searchView.getInput();
    console.log(query);
    
    if(query){
        searchView.clearInput();
        const randomSearch = new Search(query);
        randomSearch.getResults();
    }   
};

document.querySelector(elements.searchBtn).addEventListener('click', e => {
    e.preventDefault();
    controlSearch();
});


