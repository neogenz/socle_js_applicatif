/*--------------------FILE DEFINITION----------------------
OBJECT : Regroupe toutes les constantes au niveau de l'application
DEPENDENCIES : Aucune
----------------------FILE DEFINITION--------------------*/


/*--------------------FILE CONTENT ( DO NOT FORGET TO VALID CODE ON JSHINT :) )----------------------*/

var __ = __ || {};

/**
 * Shortcut getElementById Find DOM Element
 * @param {string} id element 
 * @return DOM Element
 */
__.g = function(id) {
    return document.getElementById(id);
};

/**
 * Shortcut getElementById active only if DEV environment
 * @param {string} string to show
 */
__.c = function(param) {
    var debug = (app.config.environment === app.constantes.DEV);

    if (window.console && debug) {
        console.info(param);
    }
};

/**
 * Créer une chaine d'objet rattachés à un objet parent à partir d'une string
 * @param {object} object parent ex: app, core....
 * @param {string} string to parse
 * @return DOM Element
 */
__.namespace = function(app, ns_string) {
    var parts = ns_string.split('.'),
        parent = app
,
        i;
    //strip rudendant leading global
    if (parts[0 === parent]) {
        parts = parts.slice(1);
    }
    for (var i = 0; i < parts.length; i++) {
        //create a property if doesn't exist
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};

/*--------------------FILE CONTENT ( DO NOT FORGET TO VALID CODE ON JSHINT :) )----------------------*/
