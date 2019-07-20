import { apiRequest,postApiRequest,putApiRequest,deleteApiRequest } from '../apiRequests';

export function fetchCategories() {
    return apiRequest('/api/category');
}

export function addCategory(body) {
    return postApiRequest('/api/category',body);
}
export function editCategory(body) {
    return putApiRequest(`/api/category/${body.id}`,body);
}
export function deleteCategory(id) {
    return deleteApiRequest(`/api/category/${id}`);
}
