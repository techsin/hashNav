/* Library Start here  v.0.0.1*/

function hashNav() {
    hashinit(this);
    this.init();
}

function hashinit(t) {
    hashNav.prototype._list = [];

    hashNav.prototype.init = function() {
        window.addEventListener('hashchange', t._update);
    };


    hashNav.prototype._update = function() {
        var hash = location.hash;
        t._list.forEach(function(e) {
            var fName = e.c.join(' ');
            if ('#' + e.id == hash) {
                if (!!fName) e.ele.className = fName;
                else e.ele.style.display = 'block';
            } else {
                if (!!fName) e.c.forEach(function(k) {
                    t._removeClass(e.ele, k);
                });
                else e.ele.style.display = 'none';
            }
        });
    };

    hashNav.prototype._splitClass = function(c) {
        if (c === undefined) return;
        return c.trim().split(/\s+/ig);
    }

    hashNav.prototype.add = function(i, c) {
        c = this._splitClass(c) || [];
        this._list.push({
            id: i,
            c: c,
            ele: document.getElementById(i)
        });
        this._update();
    };

    hashNav.prototype.remove = function(id, c) {
        var list = this._list;
        c = this._splitClass(c);

        for (var i = 0; i < list.length; i++ ) {
            var item = list[i];
            if (item.id == id) {
                if (c === undefined) list.splice(i, 1);
                else {
                    c.forEach(function(v) {
                        var a = item.c.indexOf(v);
                        if (a > -1) item.c.splice(a, 1);
                    });
                }
                this._update();
                break;
            }
        }
    };

    hashNav.prototype._removeClass = function(e, c) {
        e.className = e.className.replace(new RegExp('(?:^|\\s)' + c + '(?!\\S)', 'ig'), '');
    };



}



//polyfills

/* polyfill for String.trim */
if (!String.prototype.trim) {
    (function() {
        // Make sure we trim BOM and NBSP
        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        String.prototype.trim = function() {
            return this.replace(rtrim, '');
        };
    })();
}

/* polyfill for Array.indexOf */
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
            if (this[i] === obj) {
                return i;
            }
        }
        return -1;
    }

}

/* Library End here */
