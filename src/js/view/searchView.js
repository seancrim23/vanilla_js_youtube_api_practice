import { elements } from '../base';

export const getInput = () => elements.fieldSearch.value;

export const clearInput = () => elements.fieldSearch.value = '';

export const renderResults = resultsList => {
    resultsList.forEach(renderVideo);
};

const renderVideo = video => {
    let id = '';
    
    if(video.id.hasOwnProperty('videoId')){
       id = video.id.videoId; 
    }else if(video.id.hasOwnProperty('playlistId')){
        id = video.id.playlistId;  
    }else if(video.id.hasOwnProperty('channelId')){
        id = video.id.channelId;
    }
    
    const videoHtml = `
        <div style="border-style: double; text-align: center" data-itemid="${id}" class="video__block">
                <h3 id="video__title">${video.snippet.title}</h3>
                <img style="padding-bottom: 20px" src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}" />
        </div>
    `;
    
    elements.resultsList.insertAdjacentHTML('beforeend', videoHtml);
};

export const clearResults = () => {
    const parentNode = elements.resultsList;
    while(parentNode.firstChild){
        parentNode.removeChild(parentNode.firstChild);
    }
};

export const highlightSelected = id => {
    const allResults = Array.from(document.querySelectorAll('.video__block'));
    allResults.forEach(current => {
        current.style.background = ''; 
    });
    document.querySelector(`[data-itemid="${id}"]`).style.backgroundColor = 'red'; 
};

export const displaySearchForm = () => {
    elements.search.style.display = 'inline';
};