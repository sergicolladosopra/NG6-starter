import TestComponentModule from './testComponent'
import TestComponentController from './testComponent.controller';
import TestComponentComponent from './testComponent.component';
import TestComponentTemplate from './testComponent.html';

describe('TestComponent', () => {
  let $rootScope, makeController;

  class serviceMock {
    get(){
        return { testLabel: 'testdata'}
    }
  }

  beforeEach(window.module(TestComponentModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new TestComponentController(new serviceMock());
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property testComponent', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    it('has name in template [REMOVE]', () => {
      expect(TestComponentTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = TestComponentComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(TestComponentTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(TestComponentController);
      });
  });
});
