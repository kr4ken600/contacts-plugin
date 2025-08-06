import { WebPlugin } from '@capacitor/core';
export class ContactPluginWeb extends WebPlugin {
    openChat(options) {
        console.log("openChat", options);
        throw this.unavailable('ERROR: Contact Plugin not Implemented');
    }
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map