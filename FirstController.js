angular.module('angularIntro').controller('FirstController', function($scope) {

    $scope.firstName = "Sally";
    $scope.lastName = "Rally";

    $scope.updateMessage = function() {
      alert($scope.lastName);
    };

    $scope.people = [
      {
        name:'Sally Smith',
        age: 56,
        city: 'Orem',
        state: 'UT',
        email: "sally@gmail.com",
        isNew: true
      },
      {
        name:'Sam Smith',
        age: 32,
        city: 'Orem',
        state: 'UT',
        email: "sam@gmail.com",
        isNew: false
      },
      {
        name:'Chris Johnson',
        age: 22,
        city: 'Houston',
        state: 'TX',
        email: "chris@gmail.com",
        isNew: true
      }
    ];
    // console log the scope object


    // Make a test
    // Add first name
    // Add last name
    // Add heading
    // Make a function called updateMessage that will update the message property on sc
    // Make a names array that you can ng-repeat over
    // Make a names array of objects that you can ng-repeat over

    // Make a isReturning scope variable and set it to true
});

/*$scope.userInfo = [];
$scope.filterName = '';

$scope.submit = function() {
  $scope.userInfo.push($scope.filterName);
}*/
