import { apiRequest,postApiRequest,putApiRequest } from '../apiRequests';

export function fetchCategories() {
    return apiRequest('/api/category');
}

export function addCategory(body) {
    return postApiRequest('/api/category',body);
}
export function editCategory(body) {
    return putApiRequest(`/api/category/${body.id}`,body);
}
