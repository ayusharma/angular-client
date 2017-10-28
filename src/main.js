import app from './app';
import routes from './router';

// nav
import nav from './nav/nav';

app.controller('hello', function ($scope) {
  $scope.say = 'hello world';
});

app.config(routes);

app.directive('header', nav);

export default app;
