export default class Search {
    constructor(query){
        this.query = query;
    }
    
    async getResults(){
        try{
            const res = await gapi.client.youtube.search.list({
                "part": "snippet",
                "maxResults": 25,
                "q": `${this.query}`
            });
            //console.log(res.result.items);
            return res.result.items;
        }catch(e){
            console.log(e);
        }
    }
};