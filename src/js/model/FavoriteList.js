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
            if(this.list[i].itemId === videoId){
                videoIndex = i;
            }
        }
        
        this.list.splice(videoIndex, 1);
    }
    
    favoriteExists(videoId){
        let videoFound = false;
        for(let i = 0; i < this.list.length; i++){
            console.log(`current list: ${this.list[i].itemId}, video id: ${videoId}`);
            if(this.list[i].itemId === videoId){
                videoFound = true;
            }
        }
        
        return videoFound;
    }
};