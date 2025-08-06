import { WebPlugin } from '@capacitor/core';

import type { ContactPluginPlugin } from './definitions';

export class ContactPluginWeb extends WebPlugin implements ContactPluginPlugin {
  openChat(options: { Url: string; OrganizationId: string; DeveloperName: string; }): Promise<void> {
    console.log("openChat", options);
    
    throw this.unavailable('ERROR: Contact Plugin not Implemented');
  }
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  
}
