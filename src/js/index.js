import { authenticate, loadClient } from './auth';
import { elements } from './base';
import Search from './model/Search';
import * as searchView from './view/searchView';
import Video from './model/Video';
import * as videoView from './view/videoView';
import * as favoriteListView from './view/favoriteListView';

const controlAuth = async () => {
    //create new auth
    loadClient();
    
    const authSuccess = await authenticate();
    
    if(authSuccess){
        removeAuth();
        searchView.displaySearchForm();
        favoriteListView.displayFavoriteList();
    }
    
};

//authorizes the user to be able to use the
//buttons to interact with the youtube api
elements.authBtn.addEventListener('click', controlAuth);

const removeAuth = () => {
    elements.authBtn.style.display = 'none';
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

const controlVideo = async (id) => {
    const video = new Video(id);

    try{
        await video.getVideo();
        console.log(video);
        videoView.clearSingleVideo();
        videoView.renderSingleVideo(video);
    }catch(e){
        console.error('Could not find the video!', e);
    }
};

elements.resultsList.addEventListener('click', e => {   
    const selectedId = e.target.parentElement.dataset.itemid;
    searchView.highlightSelected(selectedId);
    
    controlVideo(selectedId);
});

const controlFavs = () => {
    
};

elements.indivVideo.addEventListener('click', e => {
    console.log(e.target);
});

