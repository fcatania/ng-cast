angular.module('video-player')

.component('search', {
  bindings: {
    service: '<',
    result: '<'
  },
  controller: function() {
    this.search = function(q) {
      this.service.search(this.result, q);
    };      
    
  },
  templateUrl: 'src/templates/search.html'
});
