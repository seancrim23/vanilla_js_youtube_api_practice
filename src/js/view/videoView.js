import { elements } from '../base';

export const clearSingleVideo = () => {
    const parentNode = elements.indivVideo;
    while(parentNode.firstChild){
        parentNode.removeChild(parentNode.firstChild);
    }
};

export const renderSingleVideo = video => {
    const singleVideoHtml = `
        <div style="border-style: double; text-align: center" data-itemid="${video.id}" data-title="${video.title}" class="video__block">
            <h2 id="video__title">${video.title}</h2>
            <img style="padding-bottom: 20px" src="${video.thumbnail}" alt="${video.title}" />
            <p>${video.description}</p>
            <div class="row">
                <div class="col-sm">Views: ${video.views}</div>
                <div class="col-sm">Watch the video <a href=${video.url}>here!</a></div>
            </div>
            <button class="btn__fav btn btn-primary">Favorite This Video!</button>
        </div>
    `;
    
    elements.indivVideo.insertAdjacentHTML('beforeend', singleVideoHtml);
};

