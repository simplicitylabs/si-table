// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('siTable.config', [])
    .value('siTable.config', {
        debug: true
    });

// Modules
angular.module('siTable.directives', []);
angular.module('siTable.filters', []);
angular.module('siTable',
    [
        'siTable.config',
        'siTable.directives',
        'siTable.filters',
    ]);
