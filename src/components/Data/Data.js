let rerenderEntireTree = () => {}

let Data = {
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
}

export const addPost = () => {
    let newPost = {
        id: 4,
        post: Data.Profile.newPostText,
        likeValue: 0
    }
    Data.Profile.posts.push(newPost)
    Data.Profile.newPostText = ''
    rerenderEntireTree(Data)
}

export const updateTextValue = (newText) => {
    Data.Profile.newPostText = newText
    rerenderEntireTree(Data)
}

export const subject = (observer) => {
    rerenderEntireTree = observer
}

export default Data