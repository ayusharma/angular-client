'use-strict';

class apiService {
  constructor($http, $q) {
    'ngInject';
    this._$http = $http;
    this._$q = $q;
    this.baseApi = 'http://localhost:3000'
  }

  send(value) {
    return this._$http.post(this.baseApi, value)
      .then(function(res){
        console.log('response');
      })
      .catch(function(err){
        console.log(err);
      });
  }

}

export default apiService;
