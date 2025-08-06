import { WebPlugin } from '@capacitor/core';
import type { ContactPluginPlugin } from './definitions';
export declare class ContactPluginWeb extends WebPlugin implements ContactPluginPlugin {
    openChat(options: {
        Url: string;
        OrganizationId: string;
        DeveloperName: string;
    }): Promise<void>;
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
