import { elements } from '../base';

export const displayFavoriteList = () => {
    elements.favs.style.display = 'inline';
};

export const renderFavoriteList = favoriteList => {
    favoriteList.forEach(renderFavorite);
};

const renderFavorite = favorite => {
    const favoriteHtml = `
        <div style="border-style: double; text-align: center" data-itemid="${favorite.id}" class="fav__block">
                <h3 id="fav__title">${favorite.title}</h3>
                <button class="btn__remove__fav btn btn-primary btn-sm">Favorite This Video!</button>
        </div>
    `;
};