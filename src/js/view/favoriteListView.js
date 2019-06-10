import { elements } from '../base';

export const displayFavoriteList = () => {
    elements.favs.style.display = 'inline';
};

export const renderFavoriteList = favoriteList => {
    if(favoriteList.list.length !== 0){
        elements.favsList.insertAdjacentHTML('afterbegin', `<h2 class="favs"><u>Favorites List</u>:</h2>`);
    }
    favoriteList.list.forEach(renderFavorite);
};

const renderFavorite = favorite => {
    const favoriteHtml = `
        <div style="border-style: double; text-align: center" data-itemid="${favorite.itemId}" class="fav__block">
                <h3 id="fav__title">${favorite.title}</h3>
                <button class="btn__remove__fav btn btn-primary btn-sm">Remove Favorite</button>
        </div>
    `;
    
    elements.favsList.insertAdjacentHTML('beforeend', favoriteHtml);
};

export const clearFavorites = () => {
    const parentNode = elements.favsList;
    while(parentNode.firstChild){
        parentNode.removeChild(parentNode.firstChild);
    }
};