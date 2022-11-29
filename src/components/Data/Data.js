const addPost = 'ADD_POST'
const updateTextValue = 'UPDATE-TEXT-VALUE'
const newMessageText = 'NEW-MESSAGE_TEXT'
const addMessage = 'ADD_MESSAGE'

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
            ],
            newMessageText: ''
        }
    },

    getData() {
        return this._Data
    },
    subject(observer) {
        this.rerenderEntireTree = observer
    },

    dispatch(action) {
        if (action.type === addPost) {
            let newPost = {
                id: 4,
                post: this._Data.Profile.newPostText,
                likeValue: 0
            }
            this._Data.Profile.posts.push(newPost)
            this._Data.Profile.newPostText = ''
            this.rerenderEntireTree(this._Data)
        } else if (action.type === updateTextValue) {
            this._Data.Profile.newPostText = action.newText
            this.rerenderEntireTree(this._Data)
        } else if (action.type === addMessage) {
            let newMessage = {
                id: 8,
                message: this._Data.Message.newMessageText
            }
            this._Data.Message.messages.push(newMessage)
            this._Data.Message.newMessageText = ''
            this.rerenderEntireTree(this._Data)
        } else if (action.type === newMessageText) {
            this._Data.Message.newMessageText = action.newMessage
            this.rerenderEntireTree(this._Data)
        }

    }
}

export const buttonAddPostActionCreator = () => ({type: addPost}) 
export const onPostChangeActionCreator = (newText) => ({
    type: updateTextValue, 
    newText: newText
})
export const buttonAddMessageActionCreator = () => ({type: addMessage}) 
export const onMessageChangeActionCreator = (newMessage) => ({
    type: newMessageText, 
    newMessage: newMessage
})

export default Store