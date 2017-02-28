export default class TestComponentController {
  constructor(testService) {
    "ngInject";
    this.name = 'testComponent';
    console.log(testService.get());
  }
}



