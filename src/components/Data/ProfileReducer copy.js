const addPost = 'ADD_POST'
const updateTextValue = 'UPDATE-TEXT-VALUE'

const profileReducer = (state, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                id: 4,
                post: state.newPostText,
                likeValue: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case updateTextValue: {
            state.newPostText = action.newText
    return state
        }
        default:
            return state
    }
}

export default profileReducer
