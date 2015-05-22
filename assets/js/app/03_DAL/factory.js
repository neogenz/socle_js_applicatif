/*--------------------FILE DEFINITION----------------------
OBJECT : Instancie une liste d'objet (polymorphe) soit avec la function correspondante du mock si isMockActive===true sinon avec la function correspondante xhr
DEPENDENCIES : 
    -core.__globale.js
----------------------FILE DEFINITION--------------------*/

__.namespace(app, 'functions');

/*--------------------FILE CONTENT ( DO NOT FORGET TO VALID CODE ON JSHINT :) )----------------------*/

//list functions polymorphes
app.functions.list = {
    user_get_all: null,
    get_userList_byGroup: null,
    get_groupAD_byName: null
};

app.functions.factory = (function() {

    var _run = function() {

        for (var prop in app.functions.list) {

            var path = app.config.isMockActive ? app.functions.mock : app.functions.xhr;

            if (typeof path.list[prop] === 'function') {
                app.functions.list[prop] = path.list[prop];
            } else {
                throw new Error('La fonction ' + prop + ' n\'est pas présente dans le fichier ' + (app.config.isMockActive ? 'mock' : 'xhr') + '.list');
            }
        };
    };

    return {
        run: _run
    }
})();

/*--------------------FILE CONTENT ( DO NOT FORGET TO VALID CODE ON JSHINT :) )----------------------*/
