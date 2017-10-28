import template from './nav.template.html';

const nav = function () {
  return {
    template: template,
    restrict: 'E'
  };
};

export default nav;
