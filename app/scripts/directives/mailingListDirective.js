app.directive('mailingList', function(){
  return{
    restrict: 'E',
    require: 'mailingList',
    templateUrl: 'templates/mailinglist.html',
    link : function(scope, element, attrs, mailingListController){
      mailingListController.getlist(attrs.resource);
    },
    controller: function($scope, MailingListService){


      this.getlist = function(res){
        MailingListService.get(res).then(function(data){
          $scope.contacts = data;
        });
      }


      $(function(){
        $("#addnew").hide();
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
    }
  };
})
