angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = (index) => { 
      this.currentVideo = this.videos[index]; 
    };
    youTube.fetchYTVids();
  },
  templateUrl: 'src/templates/app.html'
});
