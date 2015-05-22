__.namespace(app, 'model');

app.model = (function() {
    // rhe creer un méthode de vérification de paramètre
    var _verifparam = function(param, key) {
        if (typeof param[key] === 'undefined') {
            throw new Error('Champ : ' + key + ' non disponible');
        } else {
            return param[key];
        }
    };
    var _UserAD = function(param) {
        this.checked = false;
        this.nom = _verifparam(param, 'nom');
        this.prenom = _verifparam(param, 'prenom');
        this.matricule = _verifparam(param, 'matricule');
        this.groupeId = _verifparam(param, 'service_key'); // rhe à modifier
    };

    var _GroupeAd = function(key, param) {
        this.id = 'groupeid-' + key;
        this.name = _verifparam(param, '__NomGroupe');
    };

    return {
        UserAD: _UserAD,
        GroupeAd: _GroupeAd
    };
})();


app.model.factory = (function() {
    var self = this;
    self.constructor = null;

    var _runFactory = function(list, name) {
        var tab = [],
            temp = app.model[name];

        if (typeof temp === 'undefined') {
            throw new Error('Le factory ne trouve pas le constructeur : ' + name);
        } else {
            self.constructor = temp;
        }


        if (typeof list === null) {
            return;
        }

        var i = list.length;
        while (i--) {
            var newItem = new self.constructor(i, list[i]);
            tab.push(newItem);
        }
        return tab;
    };
    return {
        runFactory: _runFactory
    };
})();
