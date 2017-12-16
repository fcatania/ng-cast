angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = (index) => { 
      this.currentVideo = this.videos[index]; 
    };
    this.searchVideos = (query) => {
      // console.log(query);
      youTube.fetchYTVids(this.replaceVideos, query); 
    };
    this.replaceVideos = (videos) => {
      this.videos = videos;
      this.currentVideo = this.videos[0];
    };
    youTube.fetchYTVids(this.replaceVideos);
  },
  templateUrl: 'src/templates/app.html'
});
