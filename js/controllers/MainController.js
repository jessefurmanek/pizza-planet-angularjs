app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
     {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }
  ];

  $scope.extras = [
    {
      name: 'Pop',
      description: 'now with bubbles!',
      price: 4.95
    },
    {
      name: 'Machiato',
      description: 'now with milk!',
      price: 3.95
    },
     {
      name: 'Eggs',
      description: 'straight from a dinosaurs toosh!',
      price: 4.95
    }

  ]

}]);