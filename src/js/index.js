import { authenticate, loadClient } from './auth';
import { elements } from './base';
import Search from './model/Search';
import * as searchView from './view/searchView';
import Video from './model/Video';
import * as videoView from './view/videoView';
import * as favoriteListView from './view/favoriteListView';
import FavoriteList from './model/FavoriteList';

//Need to define an empty favoriteList on startup
let favList = new FavoriteList();

const controlAuth = async () => {
    //create new auth
    loadClient();
    
    const authSuccess = await authenticate();
    
    if(authSuccess){
        removeAuth();
        searchView.displaySearchForm();
        //favoriteListView.displayFavoriteList();
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
    
    try{
        await video.getRelatedVideos();
        videoView.clearRelatedVideos();
        videoView.renderRelatedVideos(video.relatedVideos);
        //console.log(video.relatedVideos);
    }catch(e){
        console.error('Could not find any related videos!', e);
    }
};

elements.resultsList.addEventListener('click', e => {   
    const selectedId = e.target.parentElement.dataset.itemid;
    searchView.highlightSelected(selectedId);
    
    controlVideo(selectedId);
});

const controlFavs = (videoInfo) => {

    if(!favList.favoriteExists(videoInfo.itemId)){
        favList.addFavorite(videoInfo);
        favoriteListView.clearFavorites();
        favoriteListView.renderFavoriteList(favList);
    }
    
};

elements.indivVideo.addEventListener('click', e => {
    let itemId = e.target.parentElement.dataset.itemid;
    let title = e.target.parentElement.dataset.title;
    let videoInfo = {
        itemId,
        title
    };
    
    controlFavs(videoInfo);
});

const controlRemoveFavs = (videoId) => {
    favList.removeFavorite(videoId);
    favoriteListView.clearFavorites();
    favoriteListView.renderFavoriteList(favList);
};

elements.favsList.addEventListener('click', e => {
    console.log(e.target.parentElement.dataset.itemid);
    controlRemoveFavs(e.target.parentElement.dataset.itemid);
});
