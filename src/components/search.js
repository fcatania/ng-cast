angular.module('video-player')

.component('search', {
  bindings: {
    result: '<'
  },
  controller: function(youTube) {
    this.search = function(query) {
      youTube.search(this.result, query);
    };      
    this.keyupHandler = function(keyCode, query) {
      if (keyCode === 13) {
        this.search(query);
      }
    };
  },
  templateUrl: 'src/templates/search.html'
});
