export function authHeader() {
    // let user = JSON.parse(localStorage.getItem('user'));

    // if (user && user.token) {
        return { 'Authorization': 'Bearer ' + 'fake-jwt-token' };
    // } else {
    //     return {};
    // }
}