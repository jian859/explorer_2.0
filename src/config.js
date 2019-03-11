const IS_DEV = process.env.NODE_ENV !== 'production';
//Request url
export const API_ROOT = IS_DEV ? 'http://192.168.1.37:8080/' : 'http://116.62.135.185:8081/';
//export const API_ROOT = IS_DEV ? 'https://api.nuls.io/' : 'https://api.nuls.io/';
//Request response time
export const API_TIME = IS_DEV ? '9000' : '8000';
//运行环境（true:正式环境，false:测试环境）
export const RUN_DEV = true;
