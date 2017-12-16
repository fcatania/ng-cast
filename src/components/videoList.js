angular.module('video-player')

.component('videoList', {
  bindings: {
    videos: '<',
    vidClick: '<'
  },
  templateUrl: 'src/templates/videoList.html'
});

