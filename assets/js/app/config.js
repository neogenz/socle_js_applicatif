/*--------------------FILE DEFINITION----------------------
OBJECT : Initialise les variables config au niveau de l'application
DEPENDENCIES : 
    -app.js
	-app.__globale.js
	-app.constante.js
----------------------FILE DEFINITION--------------------*/
if (typeof app === 'undefined') {
    throw new Error('dependence app.js pas chargé');
}

if (typeof __ === 'undefined') {
    throw new Error('dependence __global.js pas chargé');
}

if (typeof app.constantes === 'undefined') {
    throw new Error('dependence app.constantes.js pas chargé');
}
__.namespace(app, 'config');

/*--------------------FILE CONTENT ( DO NOT FORGET TO VALID CODE ON JSHINT :) )----------------------*/

app.config = {
    isMockActive: true,
    environment: app.constantes.DEV
};

/*--------------------FILE CONTENT ( DO NOT FORGET TO VALID CODE ON JSHINT :) )----------------------*/
