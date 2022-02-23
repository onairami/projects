export const buildRequest = function (type, body) {
    let request;
    if (type === 'GET') {
        request = 
        {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '+sessionStorage.getItem("token")
            }
        };

        return request;
    }

    if (type === 'POST') {
        request = 
        {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '+sessionStorage.getItem("token"),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };

        return request;
    }

    if (type === 'PUT') {
        request = 
        {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer '+sessionStorage.getItem("token"),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };

        return request;
    }
}