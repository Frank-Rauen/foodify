const BASE_URL = '/api/restaurants/';

function create(data) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: new Headers({'Content-type': 'Application/json'}),
        body: JSON.stringify(data)
    })
    .then(res => {
        if(res.ok) return res.json();
        throw new Error('Restaurant Not Added');
    })
}

function index() {
    return fetch(BASE_URL).then(res => res.json());
}

function getFeatured() {
    return fetch(BASE_URL + 'featured').then(res => res.json());
}





export default {
    create,
    index,
    getFeatured
}

