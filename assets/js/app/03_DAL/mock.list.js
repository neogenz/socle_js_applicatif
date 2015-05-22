/*--------------------FILE DEFINITION----------------------
OBJECT : Regroupe toutes les functions mock
DEPENDENCIES : 
    -util.__globale.js  
----------------------FILE DEFINITION--------------------*/

if (typeof __ === 'undefined') {
    throw new Error('dependence core.__global.js pas chargé');
}

__.namespace(app, 'functions.mock');

/*--------------------FILE CONTENT ( DO NOT FORGET TO VALID CODE ON JSHINT :) )----------------------*/

// app.functions.mock.util = function(param){
//         api.loader.show();
//         setTimeout(function() {
//             if (typeof onsucess === 'function') {
//                 onsucess(data.mock.users.list);
//             }
//             api.loader.hide();
//         }, 500);
// }


app.functions.mock.list = {
    user_get_all: function(onsucess) {
        api.loader.show();
        setTimeout(function() {
            if (typeof onsucess === 'function') {
                onsucess(data.mock.users.list);
            }
            api.loader.hide();
        }, 500);
    },
    get_userList_byGroup: function(id) {
        __.c('mock get_userList_byGroup : ' + id);
    },
    get_groupAD_byName: function(param) {
        api.loader.show();
        setTimeout(function() {
            if (typeof param.successOnService === 'function') {
                param.successOnService(data.mock.group.AD.list.data);
            }
            api.loader.hide();
        }, 500);
    },
};

/*--------------------FILE CONTENT ( DO NOT FORGET TO VALID CODE ON JSHINT :) )----------------------*/
