
(function () {
var scripts = [{"deps":{"./assets/scripts/bag/bagSetting":1,"./assets/scripts/game_chp1/cp1_cup/4_java":2,"./assets/scripts/0 - 005":3,"./assets/scripts/info/bagInfo":4,"./assets/scripts/games/gameController":5,"./assets/scripts/controller/loadState":6,"./assets/scripts/tip/trigger":7,"./assets/scripts/tool/tool":8,"./assets/scripts/item/item":9,"./assets/scripts/dialog/dialog - 001":10,"./assets/scripts/game_chp1/cp1_lamp/setbuttom":11,"./assets/scripts/game_chp1/cp1_washingMachine/changcolor":12,"./assets/scripts/0 - 003":13,"./assets/scripts/0 - 004":14,"./assets/scripts/0 - 008":15,"./assets/scripts/0 - 013":16,"./assets/scripts/0":17,"./assets/scripts/0 - 014":18,"./assets/scripts/0 - 009":19,"./assets/scripts/0 - 011":20,"./assets/scripts/button":21,"./assets/scripts/changeback":22,"./assets/scripts/0 - 007":23,"./assets/scripts/bglockctr":24,"./assets/scripts/kitchenctr":25,"./assets/scripts/checkbutton":26,"./assets/scripts/chengctr":27,"./assets/scripts/lockctr":28,"./assets/scripts/savestate":29,"./assets/scripts/0 - 015":30,"./assets/scripts/showbutton":31,"./assets/scripts/testbutton":32,"./assets/scripts/paperctr":33,"./assets/scripts/0 - 001":34,"./assets/scripts/zdctr":35,"./assets/scripts/stairlock":36,"./assets/scripts/controller/game - 001":37,"./assets/scripts/controller/saveState":38,"./assets/scripts/controller/changeScene":39,"./assets/scripts/bag/useTool":40,"./assets/scripts/0 - 006":41,"./assets/scripts/0 - 010":42,"./assets/scripts/tip/tips":43,"./assets/scripts/bag/bagTool":44,"./assets/scripts/info/gameInfo":45,"./assets/scripts/0 - 002":46,"./assets/scripts/info/dialogContent":47,"./assets/scripts/info/ItemInfo":48,"./assets/scripts/info/sceneinfo":49,"./assets/scripts/game_chp1/cp1_cup/1_java":50,"./assets/scripts/game_chp1/cp1_lamp/switchbutton":51,"./assets/scripts/controller/camera":52,"./assets/scripts/game_chp1/cp1_cup/2_java":53,"./assets/scripts/0 - 012":54,"./assets/scripts/game_chp1/cp1_washingMachine/button":55,"./assets/scripts/game_chp1/cp1_cup/3_java":56,"./assets/scripts/game_chp1/cp1_cup/5_java":57,"./assets/scripts/game_chp1/cp1_washingMachine/check_out":58,"./assets/scripts/game_chp1/cp1_washingMachine/config":59,"./assets/scripts/game_chp1/cp1_washingMachine/check":60,"./assets/llj/assets/script/switchbutton":61,"./assets/scripts/controller/player_ctrl_pc - 001":62,"./assets/llj/assets/script/setbuttom":63},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/scripts/bag/bagSetting.js"},{"deps":{},"path":"preview-scripts/assets/scripts/game_chp1/cp1_cup/4_java.js"},{"deps":{},"path":"preview-scripts/assets/scripts/0 - 005.js"},{"deps":{},"path":"preview-scripts/assets/scripts/info/bagInfo.js"},{"deps":{},"path":"preview-scripts/assets/scripts/games/gameController.js"},{"deps":{},"path":"preview-scripts/assets/scripts/controller/loadState.js"},{"deps":{},"path":"preview-scripts/assets/scripts/tip/trigger.js"},{"deps":{},"path":"preview-scripts/assets/scripts/tool/tool.js"},{"deps":{},"path":"preview-scripts/assets/scripts/item/item.js"},{"deps":{},"path":"preview-scripts/assets/scripts/dialog/dialog - 001.js"},{"deps":{},"path":"preview-scripts/assets/scripts/game_chp1/cp1_lamp/setbuttom.js"},{"deps":{},"path":"preview-scripts/assets/scripts/game_chp1/cp1_washingMachine/changcolor.js"},{"deps":{},"path":"preview-scripts/assets/scripts/0 - 003.js"},{"deps":{},"path":"preview-scripts/assets/scripts/0 - 004.js"},{"deps":{},"path":"preview-scripts/assets/scripts/0 - 008.js"},{"deps":{},"path":"preview-scripts/assets/scripts/0 - 013.js"},{"deps":{},"path":"preview-scripts/assets/scripts/0.js"},{"deps":{},"path":"preview-scripts/assets/scripts/0 - 014.js"},{"deps":{},"path":"preview-scripts/assets/scripts/0 - 009.js"},{"deps":{},"path":"preview-scripts/assets/scripts/0 - 011.js"},{"deps":{},"path":"preview-scripts/assets/scripts/button.js"},{"deps":{},"path":"preview-scripts/assets/scripts/changeback.js"},{"deps":{},"path":"preview-scripts/assets/scripts/0 - 007.js"},{"deps":{},"path":"preview-scripts/assets/scripts/bglockctr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/kitchenctr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/checkbutton.js"},{"deps":{},"path":"preview-scripts/assets/scripts/chengctr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/lockctr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/savestate.js"},{"deps":{},"path":"preview-scripts/assets/scripts/0 - 015.js"},{"deps":{},"path":"preview-scripts/assets/scripts/showbutton.js"},{"deps":{},"path":"preview-scripts/assets/scripts/testbutton.js"},{"deps":{},"path":"preview-scripts/assets/scripts/paperctr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/0 - 001.js"},{"deps":{},"path":"preview-scripts/assets/scripts/zdctr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/stairlock.js"},{"deps":{},"path":"preview-scripts/assets/scripts/controller/game - 001.js"},{"deps":{},"path":"preview-scripts/assets/scripts/controller/saveState.js"},{"deps":{},"path":"preview-scripts/assets/scripts/controller/changeScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/bag/useTool.js"},{"deps":{},"path":"preview-scripts/assets/scripts/0 - 006.js"},{"deps":{},"path":"preview-scripts/assets/scripts/0 - 010.js"},{"deps":{},"path":"preview-scripts/assets/scripts/tip/tips.js"},{"deps":{},"path":"preview-scripts/assets/scripts/bag/bagTool.js"},{"deps":{},"path":"preview-scripts/assets/scripts/info/gameInfo.js"},{"deps":{},"path":"preview-scripts/assets/scripts/0 - 002.js"},{"deps":{},"path":"preview-scripts/assets/scripts/info/dialogContent.js"},{"deps":{},"path":"preview-scripts/assets/scripts/info/ItemInfo.js"},{"deps":{},"path":"preview-scripts/assets/scripts/info/sceneinfo.js"},{"deps":{},"path":"preview-scripts/assets/scripts/game_chp1/cp1_cup/1_java.js"},{"deps":{},"path":"preview-scripts/assets/scripts/game_chp1/cp1_lamp/switchbutton.js"},{"deps":{},"path":"preview-scripts/assets/scripts/controller/camera.js"},{"deps":{},"path":"preview-scripts/assets/scripts/game_chp1/cp1_cup/2_java.js"},{"deps":{},"path":"preview-scripts/assets/scripts/0 - 012.js"},{"deps":{},"path":"preview-scripts/assets/scripts/game_chp1/cp1_washingMachine/button.js"},{"deps":{},"path":"preview-scripts/assets/scripts/game_chp1/cp1_cup/3_java.js"},{"deps":{},"path":"preview-scripts/assets/scripts/game_chp1/cp1_cup/5_java.js"},{"deps":{"./config":59},"path":"preview-scripts/assets/scripts/game_chp1/cp1_washingMachine/check_out.js"},{"deps":{},"path":"preview-scripts/assets/scripts/game_chp1/cp1_washingMachine/config.js"},{"deps":{},"path":"preview-scripts/assets/scripts/game_chp1/cp1_washingMachine/check.js"},{"deps":{},"path":"preview-scripts/assets/llj/assets/script/switchbutton.js"},{"deps":{},"path":"preview-scripts/assets/scripts/controller/player_ctrl_pc - 001.js"},{"deps":{},"path":"preview-scripts/assets/llj/assets/script/setbuttom.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    