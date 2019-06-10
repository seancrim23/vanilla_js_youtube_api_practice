export default class FavoriteList{
    constructor(){
        this.list = [];
    }
    
    addFavorite(video){
        this.list.push(video);
    }
    
    removeFavorite(videoId){
        let videoIndex = 0;
        for(let i = 0; i < this.list.length; i++){
            if(this.list[i].video.id === videoId){
                videoIndex = i;
            }
        }
        
        this.list.splice(videoIndex, 1);
    }
};