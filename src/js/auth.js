import { key, clientId } from './base';

export async function authenticate() {
      try{
          await gapi.auth2.getAuthInstance()
          .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"});
          return true;
      }catch(e){
          console.error('Failed Authorization: ', e);
          return false;
      }
};

export function loadClient() {
    gapi.client.setApiKey(`${key}`);
    try{
    gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest');
        console.log('GAPI client loaded for API');
    }catch(e){
        console.error('Error loading GAPI client for API', e);
    } 
  }

gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: `${clientId}`});
});