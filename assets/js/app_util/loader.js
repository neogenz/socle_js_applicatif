    __.namespace(api, 'loader');

/***This API show loader for any asynchrone call
 * two public methods  : show(), hide()
 * show 2 overrrides :
 * show() no param loader full screen
 * show(id) append the loader the dom element getElementById(id) 
 ****/
api.loader = (function () {
    var _hide = function (id) {
        if (typeof id !== 'undefined') {   
            var t = document.getElementById('l-' + id);
            if (t !== null) {
                t.remove();
            }
        } else {
            var r = document.getElementById('lw');
            if (r !== null) {
               r.outerHTML = "";
               delete r;
            }
        }
    };

    var _show = function (id) {
        var p;
        if (typeof id !== 'undefined') {
            _hide(id);
            p = document.createElement('img');
            p.setAttribute('id', 'l-' + id);
            p.setAttribute('src', '/assets/img/loader_xs.gif');
            p.setAttribute('class', 'l-xs');
            document.getElementById(id).appendChild(p);            
        } else {
            _hide();
            p = document.createElement('div');
            p.setAttribute('id', 'lw');
            p.setAttribute('class', 'lw');
            document.body.appendChild(p);
        }
    };

    return {
        show: _show,
        hide: _hide
    };
})();