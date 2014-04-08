angular.module('siTable.directives').directive('th', function($compile) {
    var condTemplate = '\
        <a href="" ng-class="{\
                \'sort-asc\': sortingParams[sortBy] === \'asc\',\
                \'sort-desc\': sortingParams[sortBy] === \'desc\'\
            }">\
        </a>\
        <span class="sort-caret sort-asc"\
                ng-if="sortingParams[sortBy] === \'asc\'">&#9660;</span>\
        <span class="sort-caret sort-desc"\
                ng-if="sortingParams[sortBy] === \'desc\'">&#9650;</span>\
    ';
    return {
        restrict: 'E',
        require: '?^siTable',
        transclude: true,
        scope: true,
        controller: function($scope, $element, $attrs, $transclude) {

            // Transclude and add an <a> only if the header is sortable
            $transclude(function(clone) {
                if ($scope.sortingParams && $attrs.sortBy) {
                    $element.append($compile(condTemplate)($scope));
                    $element.find('a').append(clone);
                } else {
                    $element.append(clone);
                }
            });

            // Copy the sortBy attribute to scope
            $attrs.$observe('sortBy', function(sortBy) {
                $scope.sortBy = sortBy;
            });

        },
        link: function(scope, element, attrs, controller) {

            // Do as little damage as possible if this `TH` is not part of an
            // siTable
            if (!controller) {
                return;
            }

            // Tri-state toggle sorting parameter
            element.on('click', function() {
                var sortBy = attrs.sortBy;
                if (!sortBy) {
                    return;
                }
                if (scope.sortingParams[sortBy]) {
                    if (scope.sortingParams[sortBy] === 'asc') {
                        scope.sortingParams[sortBy] = 'desc';
                    } else {
                        delete scope.sortingParams[sortBy];
                    }
                } else {
                    scope.sortingParams[sortBy] = 'asc';
                }
                scope.$apply();
            });
        }
    };
});
