// @flow

type IPlainObject = { [string]: any } | {};

export default class api {

    static baseUrl = '';

    static _fetch = (path: string, method: string, data?: any = null, opt?: ?IPlainObject = null): Promise<any> => {
        const requestOptions: any = api.__mergeOptions(opt);

        let requestUrl: string = api.baseUrl + path;

        if (method === 'GET' && data) {
            requestUrl += `?${api.__urlWithParams(data)}`;
        } else if(data) {
            requestOptions.body = JSON.stringify(data);
        }
        requestOptions.method = method;

        return fetch(requestUrl, requestOptions);
    };

    // This function will return static options for API
    static __getOptions = (): {} => {
        return {};
    };

    static __urlWithParams = (params: IPlainObject): string => {
        let url = '';
        for (const paramName in params){
            const param = params[paramName];
            if (Array.isArray(param)) {
                url += `${api.__parseArray(param, paramName)}&`;
            } else {
                url += `${paramName}=${param}&`;
            }
        };

        return url.substring(0, url.length - 1);
    };

    static __parseArray = (values:Array<any> , paramName: string): string => {
        let data = values.map(value => `${paramName}[]=${value}`);
        return data.join('&');
    }

    static __mergeOptions = (opt?: ?IPlainObject): IPlainObject => {
        const requestOptions = (Object.prototype.toString.call(opt) === '[object Object]') ? opt : {};
        return {
            ...api.__getOptions(),
            ...requestOptions
        };
    };

    static get = (path: string, data?: any = null, options?: ?IPlainObject = null): Promise<any> => {
        return api._fetch(path, 'GET', data, options);
    };

    static post = (path: string, data?: any = null, options?: ?IPlainObject = null): Promise<any> => {
        return api._fetch(path, 'POST', data, options);
    };

    static put = (path: string, data?: any = null, options?: ?IPlainObject = null): Promise<any> => {
        return api._fetch(path, 'PUT', data, options);
    };

    static patch = (path: string, data?: any = null, options?: ?IPlainObject = null): Promise<any> => {
        return api._fetch(path, 'PATCH', data, options);
    };

    static delete = (path: string, options?: ?IPlainObject = null): Promise<any> => {
        return api._fetch(path, 'DELETE', null, options);
    };
}