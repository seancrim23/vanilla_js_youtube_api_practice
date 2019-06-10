export default class Video {
    constructor(id){
        this.id = id;
    };
    
    async getVideo() {
        try{
            const video = await gapi.client.youtube.videos.list({
                "part": "snippet, contentDetails, statistics",
                "id": `${this.id}`
            });
            this.title = video.result.items[0].snippet.title;
            this.description = video.result.items[0].snippet.description;
            this.url = `http://www.youtube.com/watch?v=${video.result.items[0].id}`;
            this.thumbnail = video.result.items[0].snippet.thumbnails.default.url;
            this.views = video.result.items[0].statistics.viewCount;
            console.log(video);
        }catch(e){
            console.error('Video cannot be found! It might be a channel or a playlist!', e);
        }
    
    }
    
    async getRelatedVideos() {
        try{
            const resultRelatedVideos = await gapi.client.youtube.search.list({
                "part":"snippet",
                "relatedToVideoId": `${this.id}`,
                "type": "video"
            });
            //console.log(relatedVideos);
            this.relatedVideos = [];
            for(let i = 0; i < resultRelatedVideos.result.items.length; i++){
                let relatedVideo = {
                    title: resultRelatedVideos.result.items[i].snippet.title,
                    url: `http://www.youtube.com/watch?v=${resultRelatedVideos.result.items[i].id.videoId}`,
                    thumbnail: resultRelatedVideos.result.items[i].snippet.thumbnails.medium.url
                }
                this.relatedVideos.push(relatedVideo);
            }
            //console.log(this.relatedVideos);
            
        }catch(e){
            console.error(`Cannot find any related videos to video ${this.id}`, e);
        }
    }
    
    shortDescription(){
        
    }
};

