/*--------------------FILE DEFINITION----------------------
OBJECT : Regroupe toutes les constantes au niveau de l'application
DEPENDENCIES : 
	-util.__globale.js
	-app.js
----------------------FILE DEFINITION--------------------*/

if (typeof app === 'undefined') {
    throw new Error('dependence app.js pas chargé');
}

if (typeof __ === 'undefined') {
    throw new Error('dependence core.__global.js pas chargé');
}

__.namespace(app, 'constantes');

/*--------------------FILE CONTENT ( DO NOT FORGET TO VALID CODE ON JSHINT :) )----------------------*/

app.constantes = {
    DEV: 'DEV'
};

/*--------------------FILE CONTENT ( DO NOT FORGET TO VALID CODE ON JSHINT :) )----------------------*/
