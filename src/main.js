import app from './app';
import routes from './router';

// nav
import nav from './nav/nav';

// controllers
import FormController from './form.controller';

// store service
import apiService from './api.service';


app.controller('hello', function ($scope) {
  $scope.say = 'hello world';
});

app.config(routes);

app.directive('header', nav);
app.controller('FormController', FormController);
app.factory('apiService', apiService);

export default app;
