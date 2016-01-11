var app = angular.module('builtInApp', []);

app.controller('MainController', ['$scope', function($scope){
    // The first way to do this

    //$scope.message = "Go read ng-book!";
    //$scope.myLink = "http://reddit.com";

    // It's better to put everything into a scope object like this. All your functions and everything
    // go inside of this block, everything hangs off scope
    $scope.info = {
        message: "Go read ng-book!",
        myLink: "http://reddit.com",
        makeCall: function(){
            console.log('do thing');
        }
    };

    // Even better way to write functions, you can include everything in the block above
    // or do it thisi way
    $scope.myFunction = function(){

    };
}]);