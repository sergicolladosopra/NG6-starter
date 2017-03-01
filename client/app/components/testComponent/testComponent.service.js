class testService {
  constructor($http, urls){
    "ngInject";
    this.http = $http;
    this.urls = urls;
  }
  get() {
      let data = {a: 'aFieldData', b: 'anotherFieldData'}

      this.http.get(this.urls.testService, data).then((response) => {
          data.success = response;
      }, (response)=> {
        data.error = response
      });

      return data;
    }
}

export default testService;
