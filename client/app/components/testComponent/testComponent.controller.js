export default class TestComponentController {
  constructor(testService) {
    "ngInject";
    this.name = 'testComponent';
    this.testService = testService.get();
  }
}



