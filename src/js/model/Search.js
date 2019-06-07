export default class Search {
    constructor(query){
        this.query = query;
    }
    
    async getResults(){
        try{
            const res = await gapi.client.youtube.search.list({
                "part": "snippet",
                "maxResults": 25,
                "q": `${this.query}`,
                "type": "video"
            });
            return res.result.items;
        }catch(e){
            console.log(e);
        }
    }
};