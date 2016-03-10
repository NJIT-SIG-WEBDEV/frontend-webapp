app.controller('homeCtrl', ['$scope', 'MailingListService', function($scope, MailingListService){
    $scope.title = "Mailing List";
    $scope.items = ['item1', 'item2','item3'];

  }]);
