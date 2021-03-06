angular.module('userCommService', []).
    factory('UserComm', function ($resource) {
        return $resource('/api/user/:username/:action', {}, {
            login: {method: 'GET', params: {action: 'login'}},
            logout: {method: 'GET', params: {action: 'logout'}}
        });
    });

