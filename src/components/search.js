angular.module('video-player')

.component('search', {
  bindings: {
    searchHandler: '<'
  },
  templateUrl: 'src/templates/search.html'
});
