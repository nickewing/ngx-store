export const CONFIG_PREFIX = 'NGX-STORE_';

export class ConfigHelper {

    public static getPrefix(): any {
        return localStorage.getItem('NGX-STORE_prefix');
    }

    public static setPrefix(prefix: string): any {
        return localStorage.setItem('NGX-STORE_prefix', prefix);
    }
}
