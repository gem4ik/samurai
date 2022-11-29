import messageReducer from "./MessageReducer"
import profileReducer from "./ProfileReducer copy"

const newMessageText = 'NEW-MESSAGE_TEXT'
const addMessage = 'ADD_MESSAGE'
const addPost = 'ADD_POST'
const updateTextValue = 'UPDATE-TEXT-VALUE'

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
        messageReducer(this._Data.Message, action)
        profileReducer(this._Data.Profile, action)
        this.rerenderEntireTree()
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