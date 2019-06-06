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
            this.thumbnail = video.result.items[0].snippet.thumbnails.default;
            this.views = video.result.items[0].statistics.viewCount;
        }catch(e){
            console.error('Video cannot be found! It might be a channel or a playlist!', e);
        }
    
    }
};