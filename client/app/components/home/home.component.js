import template from './home.html';
import './_home.scss';

class HomeController {

  constructor() {
    'ngInject';

  }

}

export default  {
  restrict: 'E',
  bindings: {
  },
  template,
  controller: HomeController,
  controllerAs: 'vm'
};
