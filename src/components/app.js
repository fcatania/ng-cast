angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = window.exampleVideoData;
    this.selectedVideo = this.videos[0];
    this.vidClickHandler = (index) => { 
      this.selectedVideo = this.videos[index]; 
    };
  },
  templateUrl: 'src/templates/app.html'
});
