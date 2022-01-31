import { rerenderEntireTree } from './../../rerender/rerender'

let Data = {
    Profile: {
        posts: [
            { id: 1, post: 'Hello, World', likeValue: 8 },
            { id: 2, post: "It's my first post", likeValue: 4 },
            { id: 3, post: "It's my first post", likeValue: 7 }
        ]
    },
    Message: {
        dialogs: [
            { id: 1, name: 'Sasha' },
            { id: 2, name: 'Gleb' },
            { id: 3, name: 'Vlad' },
            { id: 4, name: 'Misha' },
            { id: 5, name: 'Kostya' },
            { id: 6, name: 'Vova' },
            { id: 7, name: 'Kirill' },
            { id: 8, name: 'Sasha' }
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
}

export let addPost = (newMessage) => {
    let newPost = {
        id: 4,
        post: newMessage,
        likeValue: 0
    }
    Data.Profile.posts.push(newPost)
    rerenderEntireTree(Data)
}

export default Data