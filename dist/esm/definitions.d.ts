export interface ContactPluginPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    openChat(options: {
        Url: string;
        OrganizationId: string;
        DeveloperName: string;
    }): Promise<void>;
}
