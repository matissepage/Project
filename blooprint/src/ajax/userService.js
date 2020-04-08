import AbstractService from './AbstractService';
import root from '../.serverRoot';

class UserService extends AbstractService {
    logIn(options) {
        return this.request({
            method: 'GET',
            url: root.REACT_APP_ROOT + 'users/signIn?email=' + options.email + '&password=' + options.password
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });
    }

    signUp(options) {
        return this.request({
            method: 'POST',
            url: root.REACT_APP_ROOT + 'users/signUp',
            data: {
                password: options.password,
                login: options.user,
                email: options.email
            }
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });
    }

    logOut(options) {
        return this.request({
            method: 'PUT',
            url: root.REACT_APP_ROOT + 'users/logOut',
            data: {
                login: options.user,
                email: options.mail
            }
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });
    }

    logInService(options) {
        return this.request({
            method: 'POST',
            url: root.REACT_APP_ROOT + 'service/' + options.service_name,
            data: {
                email: options.email,
                data: JSON.stringify(options.data),
            }
        }).then(responseData => {
            if (responseData.ok) {
                return responseData;
            }
            throw responseData;
        });
    }

    addWidget(options) {
        return this.request({
            method: 'POST',
            url: root.REACT_APP_ROOT + 'widget/' + options.widget_name,
            data: {
                email: options.email,
                data: JSON.stringify(options.data)
            }
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });    
    }

    removeWidget(options) {
        return this.request({
            method: 'DELETE',
            url: root.REACT_APP_ROOT + 'widget/' + options.widget_id,
            data: {
                email: options.email,
            }
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });
    }

    getWidgetInfo(options) {
        return this.request({
            method: 'GET',
            url: root.REACT_APP_ROOT + 'widget/' + options.widget_id + "?email=" + options.email,
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });    
    }

    getServicesInfo(options) {
        return this.request({
            method: 'GET',
            url: root.REACT_APP_ROOT + 'service?email=' + options.email,
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });   
    }

    setWidgetParam(options) {
        console.log("setWidgetParam")
        console.log(options)
        return this.request({
            method: 'PUT',
            url: root.REACT_APP_ROOT + 'widget/' + options.widget_id + "?email=" + options.email,
            data: {
                data: JSON.stringify(options.data)
//                data: options.data,
            }
        }).then(responseData => {
            if (responseData.ok) {
                return responseData.json();
            }
            throw responseData;
        });   
    }
}

export default new UserService();