__.namespace(app, 'admin');

app.admin = angular.module('pageAdmin', []);

app.admin.controller('pageAdminUserListCrtl', ['$scope', '$rootScope', 'filterFilter', function($scope, $rootScope, filterFilter) {
    var manager = app.services.AD.manager;
    $scope.groupName = 'FNC_PORTAIL_ADMIN_01';
    $scope.groupAD = {
        list: [],
        selected: null
    };
    $scope.userAD = {
        list: []
    };
    $scope.isMock = app.config.isMockActive;

    // si groupAD sélectionné alors requete ajax pour chercher les utilisateurs
    $scope.$watch('groupAD.selected', function() {
        $scope.userAD = {
            list: []
        };
        var cmd = {
            paramFromCrtl: this.last,
            successOnctrl: function(data) {
                $scope.$apply(function() {
                    $scope.userAD.list = data;
                });
            }
        };
        manager.get_userList_byGroup(cmd);
    }, true);

    $scope.get_group_by_name = function() {
        var cmd = {
            paramFromCrtl: $scope.groupName,
            successOnctrl: function(data) {
                $scope.$apply(function() {
                    $scope.groupAD.list = data;
                });
            }
        };
        $scope.groupAD.list = [];
        manager.get_groupAD_byName(cmd);
    };
}]);
