
class FormController {
  constructor($scope) {
    'ngInject';

    // angular dependencies
    this.vscope = $scope;
    this.data = {
      hello: 'hi'
    };
  }

  sayHello() {
    console.log(this.data.hello);
  }
}

export default FormController;
