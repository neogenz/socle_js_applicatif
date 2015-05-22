__.namespace(app, 'services.AD');

app.services.AD.manager = (function() {

    var _get_groupAD_byName = function(param) {

        var paramServices = {
            paramCrtl: param,
            successOnService: function(data) {
                var factory = app.model.factory;

                if (!data.__GroupeCollection) {
                    throw new Error('__GroupeCollection');
                }

                var GroupeAdList = factory.runFactory(data.__GroupeCollection, 'GroupeAd');
                param.successOnctrl(GroupeAdList);
            }
        }
        app.functions.list.get_groupAD_byName(paramServices);
    };

    var _get_userList_byGroup = function(param) {
        app.functions.list.get_userList_byGroup(param);
    };

    return {
        get_groupAD_byName: _get_groupAD_byName,
        get_userList_byGroup: _get_userList_byGroup,
    }
})()
