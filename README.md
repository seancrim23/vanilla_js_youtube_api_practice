# Vanilla JS Youtube API Practice
This project will be used for me to practice and refine my vanilla javascript abilities by making use of the Youtube API. 

## Some ideas I may be able to work with:
- [x] Search for a particular keyword.
- [x] display all results (maybe 20-25 at a time or so)
- [x] display results to the UI (in a decent/nice way)
- [x] be able to select individual video results
- [x] add ability to favorite videos and see a full favorites list
- [x] add ability to remove favorites
- [x] display other videos from the creator of individually selected video


## Bugs
- [x] Keyword search does not only return videos but channels, playlists, etc. Need to parse out anything thats not a video.

## Set it up in your local!

Clone the project to your local environment!
```
git clone https://github.com/seancrim23/vanilla_js_youtube_api_practice.git
```

On the command line, navigate to the directory where you cloned the project to. Then, simply run "npm install". This will download all of the dependencies required for the project!
```
<directory_where_you_cloned_the_project>/npm install
```
If you do not have npm, it can be downloaded (along with nodeJS) from [here](https://nodejs.org/en/)

Now, to build the project, simply run this command in the same directory as the previous command:
```
npm run build
```
Finally, you should now be able to run the command to start the web server! You can run this command in the same directory as the previous command:
```
npm run start
```

If done correctly, the home web page will open in your browser and you will be able to see the application in action!