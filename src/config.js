const IS_DEV = process.env.NODE_ENV !== 'production';
//运行环境（true:正式环境，false:测试环境）
export const RUN_DEV = false;
//Request url
//export const API_ROOT = IS_DEV ? 'http://apitn1.nulscan.io' : '/api/';
export const API_ROOT = IS_DEV ? 'http://apitn1.nulscan.io' : '/api/';
//合约认证地址
export const CODE_URL ='http://192.168.1.127:15151/jsonrpc';
//Request response time
export const API_TIME = IS_DEV ? '9000' : '8000';
