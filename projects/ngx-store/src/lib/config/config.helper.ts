export const CONFIG_PREFIX = "NGX-STORE_";

export class ConfigHelper {
  public static getPrefix(): any {
    if (localStorage) {
      localStorage.getItem("NGX-STORE_prefix");
    }
    return CONFIG_PREFIX;
  }

  public static setPrefix(prefix: string): any {
    if (localStorage) {
      localStorage.setItem("NGX-STORE_prefix", prefix);
    }
    return CONFIG_PREFIX;
  }
}
