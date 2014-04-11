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

angular.module('siTableExampleApp').controller('RemoteCtrl', function($scope, $http) {
    $scope.params = {
        limit: 1,
    };

    var url = 'http://tunner.silabs.com/api/v1/projects/';
    function updateData(offset, limit, sortBy) {
        $http.get(url, {
            params: {
                offset: offset,
                limit: limit,
                orderBy: sortBy
            }
        }).then(function(data) {
            $scope.projects = data.data.objects;
            $scope.params.total = data.data.meta.totalCount;
        });
    }

    $scope.$watch('params', function(params) {
        console.log('updating data', params);
        updateData(params.offset, params.limit, params.sortBy);
    }, true);
});
