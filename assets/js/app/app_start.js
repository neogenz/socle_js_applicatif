/*--------------------FILE DEFINITION----------------------
OBJECT : Initialise les variables config au niveau de l'application
DEPENDENCIES : Aucune
----------------------FILE DEFINITION--------------------*/
window.app = window.app || {};
window.api = window.api || {};
window.data = window.data || {};
app.start = function() {

    app.functions.factory.run();
}
