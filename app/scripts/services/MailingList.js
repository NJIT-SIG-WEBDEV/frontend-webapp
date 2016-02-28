app.factory('MailingListService', ['$http', function($http){
    return{
      get: function(){ //function variable
        return $http.get('api/contacts.json').then(function(response){ //gets data from json
          return response.data; //parses the response
        });
      }
    }
}])
