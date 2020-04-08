import queryString from 'query-string';

class Ajax {

    _appendQuery(uri, query) {
        var querystring = queryString.stringify(query),
            prefix = (uri.indexOf('?') === -1) ? '?' : '&';
        return uri + prefix + querystring;
    }

    call(options) {
        var responseType = options.responseType || 'json',
            fetchOptions = {
                method: options.method || 'GET',
                headers: new Headers(options.headers || {})
            },
            fetchUrl = options.url;
        if (responseType === 'json') {
            fetchOptions.headers.append('Accept', 'application/json');
        }
        if (options.params) {
            fetchUrl = Ajax._appendQuery(fetchUrl, options.params);
        }
        if (typeof options.json === 'object') {
            fetchOptions.headers.append('Content-Type', 'application/json');
            fetchOptions.body = JSON.stringify(options.json);
        } else if (typeof options.data === 'object') {
            fetchOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
            fetchOptions.body = queryString.stringify(options.data);
        }
        return fetch(fetchUrl, fetchOptions).then(response => {
            if (responseType === 'json') {
                return response;
            }
            return null;
        }, err => {
            throw err;
        });
    }
}

export default new Ajax();
