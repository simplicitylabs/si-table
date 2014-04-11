angular.module('siTableExampleApp', [
    'siTable'
]);

angular.module('siTableExampleApp').filter('status', function () {
    var statuses = [
        'Pending',
        'OK',
        'Warning',
        'Error',
        'Fatal'
    ];
    var icons = [
        '<i class="fa fa-clock-o fa-spin"></i> Pending',
        '<span class="label label-success"><i class="fa fa-check"></i> OK</span>',
        '<span class="label label-warning"><i class="fa fa-exclamation-triangle"></i> Warning</span>',
        '<span class="label label-danger"><i class="fa fa-bug"></i> Error</span>',
        '<span class="label label-fatal"><i class="fa fa-ban"></i> Fatal</span>'
    ];
    return function (input, icon) {
        if (icon) {
            return icons[input];
        }
        return statuses[input];
    };
});


angular.module('siTableExampleApp').controller('ExampleCtrl', function($scope, $http) {
    $scope.filter = {
        $: ''
    };
    $scope.params = {
        limit: 10,
    };

    $scope.$watch('params', function(params) {
        console.log(params);
        $scope.$eval('params = params');
    }, true);

    // var url = 'https://api.github.com/repos/angular/angular.js/issues'
    var url = 'issues.offline.json';
    $http.get(url).then(function(issues) {
        $scope.issues = issues.data;
    });
});
