import { authenticate, loadClient } from './auth';
import { elements } from './base';
import Search from './model/Search';
import * as searchView from './view/searchView';
import Video from './model/Video';

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
elements.authBtn.addEventListener('click', controlAuth);

const removeAuth = () => {
    elements.authBtn.style.display = 'none';
};

const displaySearchForm = () => {
    elements.search.style.display = 'inline';
};

const showAuthFailure = () => {
    //elements.authP.innerHTML = 'Failed Authentication!';
    elements.authBtn.style.display = 'none';
};

const controlSearch = async () => {
    
    const query = searchView.getInput();
    console.log(query);
    
    if(query){
        searchView.clearInput();
        searchView.clearResults();
        const search = new Search(query);
        let results = await search.getResults();
        console.log(results);
        if(results){
            searchView.renderResults(results);
        }
    }   
};

elements.searchBtn.addEventListener('click', e => {
    e.preventDefault();
    controlSearch();
});

elements.resultsList.addEventListener('click', e => {   
    const selectedId = e.target.parentElement.dataset.itemid;
    searchView.highlightSelected(selectedId);
    const video = new Video(selectedId);
    video.getVideo();
    console.log(video);
});

