const IS_DEV = process.env.NODE_ENV !== 'production';
//运行环境（true:正式环境，false:测试环境）
export const RUN_DEV = false;
//正式、测试网络的api
export const API_ROOT = RUN_DEV ? 'https://api.nuls.io/' : 'http://apitn1.nulscan.io';
//Request response time
export const API_TIME = IS_DEV ? '9000' : '8000';
