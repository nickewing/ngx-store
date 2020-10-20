export const CONFIG_PREFIX = "NGX-STORE_";

export class ConfigHelper {
  public static isLocalStorageSupported() {
    return (
      typeof window["localStorage"] != "undefined" &&
      window["localStorage"] != null
    );
  }

  public static getPrefix(): any {
    if (ConfigHelper.isLocalStorageSupported() ) {
      localStorage.getItem("NGX-STORE_prefix");
    }
    return CONFIG_PREFIX;
  }

  public static setPrefix(prefix: string): any {
    if (ConfigHelper.isLocalStorageSupported() ) {
      localStorage.setItem("NGX-STORE_prefix", prefix);
    }
    return CONFIG_PREFIX;
  }
}
