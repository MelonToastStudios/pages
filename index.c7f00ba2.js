// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dnWJz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7f9fb32cc7f00ba2";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1Mvmj":[function(require,module,exports) {
var _wordsTs = require("./words.ts");
class Word {
    static #_ = (()=>{
        this.wordInstances = new Map();
    })();
    static #_1 = (()=>{
        this.elementToWord = new Map();
    })();
    constructor(word, x, y){
        this.word = word;
        this.x = x;
        this.y = y;
        this.wordNumber = Word.wordInstances.get(word) ?? 1;
        this.element = document.createElement("div");
        this.element.classList.add("type-word");
        this.element.classList.add(word);
        this.element.id = word;
        this.element.innerHTML = word;
        this.element.draggable = "true";
        this.element.style.position = "absolute";
        this.element.addEventListener("dragstart", handleDragStart);
        this.element.addEventListener("dragend", handleDragEnd);
        this.element.addEventListener("drag", handleDrag);
        this.element.style.left = x + "px";
        this.element.style.top = y + "px";
        Word.wordInstances.set(word, (Word.wordInstances.get(word) ?? 0) + 1);
        Word.elementToWord.set(this.element, this);
    }
    // Currently unused - forces words that this collides to move.
    processCollisions() {
        const thisCenterX = this.element.getBoundingClientRect().x + this.element.getBoundingClientRect().width / 2;
        const thisCenterY = this.element.getBoundingClientRect().y + this.element.getBoundingClientRect().height / 2;
        for (const word of Word.elementToWord.values())if (this !== word && rectIntersects(this.element.getBoundingClientRect(), word.element.getBoundingClientRect())) {
            const wordCenterX = word.element.getBoundingClientRect().x + word.element.getBoundingClientRect().width / 2;
            const wordCenterY = word.element.getBoundingClientRect().y + word.element.getBoundingClientRect().height / 2;
            const deltaX = wordCenterX - thisCenterX;
            const deltaY = wordCenterY - thisCenterY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            word.element.style.left = `${word.element.getBoundingClientRect().x + deltaX / distance * 30}px`;
            word.element.style.top = `${word.element.getBoundingClientRect().y + deltaY / distance * 20}px`;
        }
    }
}
function handleDragStart(event) {
    event.dataTransfer.setData("text/plain", // "word1,x,y;"
    `${this.id};${event.clientX - event.srcElement.getBoundingClientRect().x};${event.clientY - event.srcElement.getBoundingClientRect().y}`);
}
function handleDrag(event) {
    this.last_x = event.clientX;
    this.last_y = event.clientY;
}
function handleDragEnd(event) {
    const poemEl = document.getElementById("poem");
    const poemRect = poemEl?.getBoundingClientRect();
    const wordRect = event.srcElement?.getBoundingClientRect();
    const isClickInBox = this.last_x > poemRect.x && this.last_y > poemRect.y && this.last_x < poemRect.x + poemRect.width && this.last_y < poemRect.y + poemRect.height;
    let newX, newY;
    // the -3 is somehow related to the border width or something. It keeps the div centered.
    if (event.srcElement.style.destId !== "poem") {
        newX = this.last_x - Number(event.srcElement.style.leftTemp) - 3;
        newY = this.last_y - Number(event.srcElement.style.topTemp) - 3;
    } else {
        newX = this.last_x - poemRect.x - Number(event.srcElement.style.leftTemp) - 3;
        newY = this.last_y - poemRect.y - Number(event.srcElement.style.topTemp) - 3;
    }
    event.srcElement.style.left = `${newX}px`;
    event.srcElement.style.top = `${newY}px`;
    event.srcElement.style.leftTemp = 0;
    event.srcElement.style.topTemp = 0;
    // Modify our internal Word representation
    Word.elementToWord.get(event.srcElement).x = newX;
    Word.elementToWord.get(event.srcElement).y = newY;
    saveWordsInBox();
}
function rectIntersects(rect1, rect2) {
    return rect1.x + rect1.width > rect2.x && rect1.y + rect1.height > rect2.y && rect1.x < rect2.x + rect2.width && rect1.y < rect2.y + rect2.height;
}
function rectContains(bigrect, smallrect) {
    return smallrect.x > bigrect.x && smallrect.y > bigrect.y && smallrect.x + smallrect.width < bigrect.x + bigrect.width && smallrect.y + smallrect.height < bigrect.y + bigrect.height;
}
function isWordInBox(wordEl) {
    const poemEl = document.getElementById("poem");
    const poemRect = poemEl?.getBoundingClientRect();
    const wordRect = wordEl?.getBoundingClientRect();
    return rectContains(poemRect, wordRect);
}
function saveWordsInBox() {
    let wordsString = "/atomicpoems/?words=";
    const poemEl = document.getElementById("poem");
    const poemRect = poemEl?.getBoundingClientRect();
    Array.from(document.getElementsByClassName("type-word")).forEach((wordEl)=>{
        const wordRect = wordEl?.getBoundingClientRect();
        if (wordEl.parentNode.id === "poem") // "word,x,y;"
        wordsString += `${wordEl.innerHTML},${Math.round(wordRect.x - poemRect.x - 3)},${Math.round(wordRect.y - poemRect.y - 3)};`;
    });
    history.replaceState(null, "", wordsString);
}
// Put all strings in WordList into divs on the webpage
function addStringsToPage(wordList) {
    const body = document.getElementsByTagName("body")[0];
    const poem = document.getElementById("poem");
    // Parse the URL - put any of those words in the right spots
    const wordsString = window.location.search.split("=")[1];
    const wordsToSkip = new Map();
    const wordsOccurrence = new Map();
    // There might not be a URL path
    if (wordsString !== undefined && wordsString.length > 1) {
        // remove the final semicolon
        const urlWords = wordsString.substring(0, wordsString.length - 1).split(";");
        urlWords.forEach((wordSet)=>{
            const [word, xcor, ycor] = wordSet.split(",");
            wordsToSkip.set(word, (wordsToSkip.get(word) ?? 0) + 1);
            wordsOccurrence.set(word, (wordsOccurrence.get(word) ?? 0) + 1);
            const wordObj = new Word(word, Number(xcor), Number(ycor));
            poem?.appendChild(wordObj.element);
        });
    }
    const bodyRect = document.getElementsByTagName("body")[0].getBoundingClientRect();
    wordList.forEach((word)=>{
        if (wordsToSkip.get(word) > 0) wordsToSkip.set(word, wordsToSkip.get(word) - 1);
        else {
            wordsOccurrence.set(word, (wordsOccurrence.get(word) ?? 0) + 1);
            const wordObj = new Word(word, 0, 0);
            body?.appendChild(wordObj.element);
            do {
                wordObj.element.style.left = Math.random() * bodyRect.width * 0.9 + 50 + "px";
                wordObj.element.style.top = Math.random() * bodyRect.height * 0.9 + 50 + "px";
            }while (rectIntersects(document.getElementById("poem")?.getBoundingClientRect(), wordObj.element.getBoundingClientRect()));
        }
    });
}
// Turns a list of words into a URL query string
function getQueryString(wordList) {
    return wordList.reduce((acc, word)=>{
        return acc + "-" + word;
    });
}
// Turns a URL query string into a list of words
function getWordListFromQueryString(queryString) {
    return queryString.split("-");
}
const dropAreaIds = [
    "poem",
    "container"
];
const body = document.getElementsByTagName("body")[0];
body.addEventListener("dragover", (event)=>{
    event.preventDefault();
    return false;
});
body.addEventListener("drop", (event)=>{
    event.preventDefault();
    const dataList = event.dataTransfer.getData("text/plain").split(";");
    event.dataTransfer?.setData("text/plain", dataList.join(";"));
    const element = document.getElementById(dataList[0]);
    (element?.style).leftTemp = dataList[1];
    (element?.style).topTemp = dataList[2];
    try {
        if (Array.from(event.target.classList).find((className)=>className === "type-word") !== undefined) {
            event.target.parentElement.appendChild(element);
            (element?.style).destId = event.target.parentElement.id;
        } else {
            event.target.appendChild(element);
            (element?.style).destId = event.target.id;
        }
    } catch (error) {
        console.warn(error);
    }
    return false;
});
addStringsToPage((0, _wordsTs.WordList));

},{"./words.ts":"ihZw1"}],"ihZw1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WordList", ()=>WordList);
const WordList = [
    "&",
    "a",
    "a",
    "a",
    "about",
    "above",
    "act",
    "again",
    "age",
    "air",
    "all",
    "alone",
    "always",
    "am",
    "an",
    "an",
    "and",
    "and",
    "and",
    "and",
    "angry",
    "apartment",
    "are",
    "are",
    "as",
    "as",
    "ask",
    "at",
    "at",
    "away",
    "bacon",
    "bad",
    "be",
    "be",
    "beauty",
    "bed",
    "been",
    "begin",
    "being",
    "believe",
    "belong",
    "bitter",
    "blank",
    "blue",
    "break",
    "bring",
    "burn",
    "but",
    "but",
    "by",
    "by",
    "call",
    "can",
    "car",
    "change",
    "chocolate",
    "city",
    "clock",
    "coffee",
    "cold",
    "come",
    "could",
    "cry",
    "curse",
    "d",
    "day",
    "dead",
    "deep",
    "did",
    "die",
    "different",
    "dirty",
    "do",
    "dog",
    "door",
    "dream",
    "drink",
    "drive",
    "dry",
    "e",
    "easy",
    "eat",
    "ed",
    "ed",
    "empty",
    "end",
    "er",
    "es",
    "es",
    "est",
    "ever",
    "eye",
    "face",
    "family",
    "far",
    "feel",
    "fight",
    "find",
    "fire",
    "fix",
    "for",
    "for",
    "forever",
    "forget",
    "forgive",
    "friend",
    "from",
    "from",
    "ful",
    "funny",
    "garden",
    "gas",
    "get",
    "girl",
    "give",
    "go",
    "gone",
    "good",
    "hair",
    "hand",
    "happen",
    "happiness",
    "happy",
    "hard",
    "has",
    "has",
    "have",
    "have",
    "he",
    "he",
    "heart",
    "heavy",
    "help",
    "her",
    "her",
    "here",
    "high",
    "him",
    "him",
    "his",
    "his",
    "hold",
    "hope",
    "hour",
    "how",
    "hungry",
    "I",
    "I",
    "I",
    "I",
    "ice",
    "if",
    "in",
    "in",
    "in",
    "ing",
    "ing",
    "ing",
    "is",
    "is",
    "it",
    "it",
    "keep",
    "kill",
    "kiss",
    "kitchen",
    "know",
    "late",
    "laugh",
    "lazy",
    "learn",
    "less",
    "let",
    "letter",
    "life",
    "like",
    "like",
    "listen",
    "little",
    "live",
    "lock",
    "lone",
    "long",
    "look",
    "love",
    "ly",
    "ly",
    "mad",
    "make",
    "man",
    "matter",
    "me",
    "me",
    "mean",
    "meet",
    "mind",
    "minute",
    "miss",
    "mixtape",
    "money",
    "moon",
    "morning",
    "move",
    "movie",
    "music",
    "must",
    "my",
    "my",
    "name",
    "near",
    "need",
    "never",
    "new",
    "next",
    "night",
    "no",
    "not",
    "not",
    "nothing",
    "now",
    "number",
    "of",
    "of",
    "okay",
    "old",
    "on",
    "on",
    "one",
    "or",
    "or",
    "our",
    "out",
    "over",
    "own",
    "page",
    "paper",
    "party",
    "people",
    "phone",
    "play",
    "please",
    "pretty",
    "purple",
    "put",
    "question",
    "quick",
    "r",
    "r",
    "rain",
    "re",
    "read",
    "ready",
    "reason",
    "red",
    "right",
    "road",
    "room",
    "rough",
    "run",
    "s",
    "s",
    "s",
    "s",
    "sad",
    "safe",
    "said",
    "same",
    "save",
    "say",
    "see",
    "seek",
    "shadow",
    "she",
    "she",
    "short",
    "should",
    "show",
    "sick",
    "silence",
    "sit",
    "skin",
    "sky",
    "sleep",
    "slow",
    "small",
    "smell",
    "so",
    "some",
    "song",
    "sorry",
    "start",
    "stay",
    "still",
    "stop",
    "story",
    "sugar",
    "summer",
    "sun",
    "sure",
    "sweet",
    "table",
    "take",
    "talk",
    "tear",
    "tell",
    "thank",
    "the",
    "the",
    "the",
    "their",
    "there",
    "these",
    "they",
    "they",
    "thing",
    "think",
    "those",
    "thought",
    "through",
    "time",
    "to",
    "to",
    "today",
    "try",
    "TV",
    "up",
    "us",
    "use",
    "vacation",
    "very",
    "wait",
    "walk",
    "want",
    "warm",
    "was",
    "was",
    "water",
    "way",
    "we",
    "week",
    "well",
    "were",
    "wet",
    "what",
    "when",
    "white",
    "who",
    "why",
    "will",
    "will",
    "window",
    "wish",
    "with",
    "with",
    "wonder",
    "word",
    "work",
    "would",
    "write",
    "y",
    "y",
    "yet",
    "you",
    "you",
    "you",
    "young",
    "your",
    "your"
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["dnWJz","1Mvmj"], "1Mvmj", "parcelRequire5c68")

//# sourceMappingURL=index.c7f00ba2.js.map
