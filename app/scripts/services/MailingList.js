app.factory('MailingListService', ['$http', function($http){
    return{
      get: function(res){ //function variable
        console.log(res);
        return $http.get(res).then(function(response){ //gets data from json
          return response.data; //parses the response
        });
      }
    }
}])
