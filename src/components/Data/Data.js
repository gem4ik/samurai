let Store = {
    rerenderEntireTree() { },
    _Data: {
        Profile: {
            posts: [
                { id: 1, post: 'Hello, World', likeValue: 8 },
                { id: 2, post: "It's my first post", likeValue: 4 },
                { id: 3, post: "It's my first post", likeValue: 7 }
            ],
            newPostText: ''
        },
        Message: {
            dialogs: [
                { id: 1, name: 'Sasha' },
                { id: 2, name: 'Gleb' },
                { id: 3, name: 'Vlad' },
                { id: 4, name: 'Misha' },
                { id: 5, name: 'Kostya' },
                { id: 6, name: 'Vova' },
            ],
            messages: [
                { id: 1, message: 'I' },
                { id: 2, message: "don't" },
                { id: 3, message: 'even' },
                { id: 4, message: 'know' },
                { id: 5, message: 'who' },
                { id: 6, message: 'i' },
                { id: 7, message: 'am' }
            ]
        }
    },

    getData() {
        return this._Data
    },
    subject(observer) {
        this.rerenderEntireTree = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                post: this._Data.Profile.newPostText,
                likeValue: 0
            }
            this._Data.Profile.posts.push(newPost)
            this._Data.Profile.newPostText = ''
            this.rerenderEntireTree(this._Data)
        } else if (action.type === 'UPDATE-TEXT-VALUE') {
            this._Data.Profile.newPostText = action.newText
            this.rerenderEntireTree(this._Data)
        }

    }
}

export default Store