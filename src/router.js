import formTemplate from './form.template.html';

export default function ($stateProvider) {
  $stateProvider.state('landing', {
    name: 'hello',
    url: '',
    template: formTemplate,
    controller: 'FormController',
    controllerAs: 'FormController'
  });
}
