function getObject(){
    let requestURL = 'https://jsonplaceholder.typicode.com/posts';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
      let objects = request.response;
      let object = objects.find(x => x.id === 5);
      console.log(object)
      return object;
      
    }
  }