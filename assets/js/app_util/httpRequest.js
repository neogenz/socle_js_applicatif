/*--------------------FILE DEFINITION----------------------
OBJECT : Methode permettant de faire de l'ajax
DEPENDENCIES : 
    -util.__globale.js  
----------------------FILE DEFINITION--------------------*/

if (typeof __ === 'undefined') {
    throw new Error('dependence core.__global.js pas chargé');
}

__.namespace(app, 'xhr');

app.xhr = (function() {

    function _Param(param) {

        if (typeof param.url === 'undefined') {
            throw new Error('param url obligatoire');
        }

        this.url = param.url;
        this.onsuccess = param.onsuccess;
        this.type = param.type || 'GET';
        this.async = param.async || true;
        this.sendData = null;
        this.timeOut = param.timeOut || 2000;

        if (this.type === 'POST') {
            this.type = param.type.toLowerCase()
            if (typeof param.data === 'undefined') {
                throw new Error('il n\'y a pas de donnée postée');
            }
            this.sendData = JSON.stringify(param.data);
        }
    };

    var run = function(param) {
        var xhReq = new XMLHttpRequest();
        xhReq.open(param.type, param.url, true);

        if (param.type === 'post') {
            xhReq.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        }

        api.loader.show();
        var requestTimer = setTimeout(function() {
            xhReq.abort();
            api.loader.hide();
            throw new Error('XHR Abord');
        }, param.timeOut);

        xhReq.onreadystatechange = function() {

            if (xhReq.readyState != 4) {
                return;
            }

            api.loader.hide();
            clearTimeout(requestTimer);

            if (xhReq.status === 405) {
                throw new Error('problème proxy sur chrome');
            }

            if (typeof param.onsuccess === 'function') {
                param.onsuccess(JSON.parse(xhReq.responseText));
            }
        };
        xhReq.send(param.sendData);
    };
    return {
        run: run,
        Param: _Param
    };

})();
