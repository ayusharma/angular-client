
class FormController {
  constructor($scope) {
    'ngInject';

    // angular dependencies
    this.vscope = $scope;
    this.data = {};
    this.demographics = {
      ages: {},
      gender: {
        male: 1
      },
      race: {},
      income: {},
      education: {}
    };
  }

  sayHello() {
    console.log(this.demographics);
  }
}

export default FormController;
