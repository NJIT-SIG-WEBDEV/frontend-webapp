app.controller('homeCtrl', ['$scope', 'MailingListService', function($scope, MailingListService){
    $scope.title = "Mailing List";
    $scope.items = ['item1', 'item2','item3'];
    MailingListService.get().then(function(data){
      $scope.contacts = data;
    })

    //removes a contact from list
    $scope.remove = function(cnt){
      var index = $scope.contacts.indexOf(cnt); //find where is contact in $scope.contacts array
      $scope.contacts.splice(index, 1);
    }


    $scope.add = function(){
      $("#addnew").toggle(); //toggles the input line
    }

    //adds a new contact to the list
    $scope.save = function(newcnt){
      $scope.contacts.push(newcnt);
      $scope.new = {}; //clears the 'new' object declared in the html
      $("#addnew").hide();
    }
  }]);
