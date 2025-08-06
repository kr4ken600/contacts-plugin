import { registerPlugin } from '@capacitor/core';
const ContactPlugin = registerPlugin('ContactPlugin', {
    web: () => import('./web').then((m) => new m.ContactPluginWeb()),
});
export * from './definitions';
export { ContactPlugin };
//# sourceMappingURL=index.js.map