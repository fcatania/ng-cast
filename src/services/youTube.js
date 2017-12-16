angular.module('video-player')
.service('youTube', function($http) {
  this.search = (callback, query = 'cats') => {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: YOUTUBE_API_KEY, 
        part: 'snippet', 
        maxResults: 5,
        type: 'video',
        q: query,
        videoEmbeddable: true
      },
      type: 'object'
    }).then(function(response) {
      callback(response.data.items);
    }, function(response) {
      console.log('FAILED');
    });
  };
});

