function apiService {
  // constructor($http, $q) {
  //   'ngInject';
  //
  //   this.$http = $http;
  //   this.$q = $q;
  //   this.baseApi = 'http://localhost:9000';
  // }

  this.send = function(value) {
    return this.$http.post(this.baseApi, value)
      .then(function (res) {
        console.log('send', res);
      })
      .catch(function (err) {
        console.log('send ', err);
      });
  }
}




export default apiService;
