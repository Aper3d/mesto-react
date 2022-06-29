class Api {
    constructor(options) {
        this._url = options.url
        this._headers = {
            authorization: options.authorization,
            'Content-Type': 'application/json'
        }
    }

    _checkRes(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`${res.status}`)
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkRes)
    }

    getCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._checkRes)
    }

    handleUserInfo(userData) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: userData.userName,
                about: userData.userDescription
            })
        })
            .then(this._checkRes)
    }
    handleUserAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.userAvatar,
            })
        })
            .then(this._checkRes)
    }

    addCard(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        })
            .then(this._checkRes)
    }

    like(id) {
        return fetch(`${this._url}/cards/likes/${id}`, {
            method: 'PUT',
            headers: this._headers
        })
            .then(this._checkRes)
    }

    dislike(id) {
        return fetch(`${this._url}/cards/likes/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkRes)
    }

    delete(id) {
        return fetch(`${this._url}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._checkRes)
    }



    getAll() {
        return Promise.all([this.getCards(), this.getUserInfo()])
    }
}

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-41',
    authorization: '934e43d4-85e6-4765-9a22-cf738085b2b0'
})

export default api;
