__.namespace(api, 'listOption');
/***This API decorate any list option passed in param
 *
 * 1) sort list by libelle
 * 2) we keep selected value into the local storage, so if the user return on the same page, he keep lastest selection
 * 3) for the first visite, display default value( choose, selection...) but on the first change this option is removed.
 *
 ****/
api.listOption = (function() {

    var ListOption = function(param) {
        this.optionList = param.optionList;
        this.defaultOption = {
            val: param.defaultOption.val,
            lib: param.defaultOption.lib
        };
        this.localStorage = {
            isActive: param.localStorage.isActive,
            key: param.localStorage.key
        };
    };

    ListOption.prototype._init = function() {
        this.optionList = _.sortBy(this.optionList, 'lib');
        if (this._isFirstConnection() || !this.localStorage.isActive) {
            this._addDefaultVal();
        } else {
            this._getOptDefaultFromLocalStorage();
        }
    };

    ListOption.prototype._getOptDefaultFromLocalStorage = function() {
        this.optSelected = localStorage.getItem(this.localStorage.key);
    };
    ListOption.prototype._isFirstConnection = function() {
        var l = localStorage.getItem(this.localStorage.key);
        return (typeof l === 'undefined' || l === null) ? true : false;
    };

    // rajoute une l'option par default 
    ListOption.prototype._addDefaultVal = function() {
        this.optionList.unshift(this.defaultOption);
    };

    var _onchange = function(optionList, defaultVal) {
        var i = optionList.length;
        while (i--) {
            if (optionList[i].val === defaultVal) {
                optionList.splice(i, i + 1);
            }
        }
    };

    var _run = function(param) {
        var newInstance = new ListOption(param);
        newInstance._init();
        return newInstance.optionList;
    };
    return {
        run
: _run,
        onchange: _onchange
    };
})();
