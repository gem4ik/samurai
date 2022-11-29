const newMessageText = 'NEW-MESSAGE_TEXT'
const addMessage = 'ADD_MESSAGE'

const messageReducer = (state, action) => {
    switch (action.type) {
        case addMessage:
            let newMessage = {
                id: 8,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case newMessageText: {
            state.newMessageText = action.newMessage
            return state
        }
        default:
            return state
    }
}

export default messageReducer