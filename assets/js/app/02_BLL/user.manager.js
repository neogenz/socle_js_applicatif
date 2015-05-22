__.namespace(app, 'services.user');

app.services.user.manager = (function() {

    var _get_all = function(onsucess) {
        return app.functions.list.user_get_all(onsucess);
    };

    return {
        get_all: _get_all

    }

})()
