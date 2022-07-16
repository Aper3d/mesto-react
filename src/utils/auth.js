export const BASE_URL = 'https://auth.nomoreparties.co';

const checkRes = (res) => {
    if (res.ok) {
        return res.json()
    }
    return Promise.reject(`${res.status}`)
};

export const register = ({ password, email }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "password": password,
            "email": email
        })
    })
        .then(checkRes)
};

export const authorize = ({ password, email }) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "password": password,
            "email": email
        })
    })
        .then(checkRes)
};

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
        .then(checkRes)
};