    var _UserAD = function(key, param) {
        var profil = param.__Profil;
        this.id = 'userAD-' + key;
        this.checked = false;
        this.nom = _verifparam(profil, '__Nom');
        this.prenom = _verifparam(profil, '__Prenom');
        this.matricule = _verifparam(profil, '__Matricule');
        this.email = _verifparam(profil, '__Mail');
        this.tel = _verifparam(profil, '__Telephone');
        this.codeSociete = _verifparam(profil, '__Societe');
    };
    };
