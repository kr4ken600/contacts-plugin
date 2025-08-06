var capacitorContactPlugin = (function (exports, core) {
    'use strict';

    const ContactPlugin = core.registerPlugin('ContactPlugin', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.ContactPluginWeb()),
    });

    class ContactPluginWeb extends core.WebPlugin {
        openChat(options) {
            console.log("openChat", options);
            throw this.unavailable('ERROR: Contact Plugin not Implemented');
        }
        async echo(options) {
            console.log('ECHO', options);
            return options;
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ContactPluginWeb: ContactPluginWeb
    });

    exports.ContactPlugin = ContactPlugin;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
