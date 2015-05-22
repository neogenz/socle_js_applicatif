/*--------------------FILE DEFINITION----------------------
OBJECT : Regroupe toutes les functions ajax
DEPENDENCIES : 
    -util.__globale.js  
----------------------FILE DEFINITION--------------------*/

if (typeof __ === 'undefined') {
    throw new Error('dependence core.__global.js pas chargé');
}

__.namespace(app, 'functions.xhr');

/*--------------------FILE CONTENT ( DO NOT FORGET TO VALID CODE ON JSHINT :) )----------------------*/

app.functions.xhr.list = {
    user_get_all: function() {
        var a = new app.xhr.Param({
            url: 'http://localhost:53032/web/users'
        })
        app.xhr.run(a);
    },

    get_groupAD_byName: function(param) {
        var groupeName = param.paramCrtl.paramFromCrtl,
            data;
        data = app.xhr.run(new app.xhr.Param({
            url: 'http://localhost:53032/web/Group/' + groupeName,
            onsuccess: param.successOnService
        }));

    },
    get_userList_byGroup: function(groupeName) {},

    user_create_update: function(versionId) {
        app.xhr.run(new app.xhr.Param({
            type: 'post',
            url: 'http://localhost:53032/web/postUser/applicationVersionId/' + versionId,
            data: {
                ID_APPLICATIONVERSIONENDPOINT: -1,
                FK_APPLICATIONVERSION: versionId,
                NOM: 'rere',
                PRENOM: 'prenom',
                EMAIL: 'zezrzre',
                MATRICULE: 'zezrr',
                ENABLE_USER: true
            }
        }));
    }
};

/*--------------------FILE CONTENT ( DO NOT FORGET TO VALID CODE ON JSHINT :) )----------------------*/
