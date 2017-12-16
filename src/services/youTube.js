angular.module('video-player')
.service('youTube', function($http) {
  // $http.get()
  this.fetchYTVids = (query = 'cats') => {
    console.log('fetchWasCalled');
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
      console.log('SUCCESS');
      console.log(response); // response.data.items holds our vids
    }, function(response) {
      console.log('FAILED');
    });
  };
});

