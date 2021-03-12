import api from '@/assets/globals/api';
import configs from '@/assets/config/app.config';

var promise;

export default class TodoService {
    
    async list() {
        promise = await api.client.get(configs.end_point.todos);
        return promise;
    }

    // store(data) {
    //     promise = api.client.post(config.end_point.admin.e_commerce.size_options, data);
    //     return promise;
    // }
    //
    // update(id, data) {
    //     promise = api.client.put(config.end_point.admin.e_commerce.size_options + '/' + id, data);
    //     return promise;
    // }

    // show(id) {
    //     promise = api.client.get(config.end_point.admin.e_commerce.size_options+ '/' + id);
    //     return promise;
    // }
    //
    // delete(id) {
    //     promise = api.client.delete(config.end_point.admin.e_commerce.size_options + '/' + id);
    //     return promise;
    // }
}

export const todoService = new TodoService();