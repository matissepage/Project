import Ajax from './Ajax';

class AbstractService {

    request(options) {
        return Ajax.call(options);
    }

}

export default AbstractService;
