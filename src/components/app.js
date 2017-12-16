angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    this.$onInit = () => {
      this.service = youTube;
      youTube.search(this.replaceVideos);
      console.log(youTube.search);
    };
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = (index) => { 
      this.currentVideo = this.videos[index]; 
    };
    this.search = (query) => {
      console.log('search invoked');
      youTube.search(this.replaceVideos, query); 
    };
    this.replaceVideos = (videos) => {
      this.videos = videos;
      this.currentVideo = this.videos[0];
    };
  },
  templateUrl: 'src/templates/app.html'
});
