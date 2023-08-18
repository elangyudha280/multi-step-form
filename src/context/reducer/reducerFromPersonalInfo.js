export default function reducerPersonalInfo(state,action){
    switch (action.type) {
        case 'setUsername':
            return {...state,username:action.payload}
            case 'setEmail':
                return {...state,email:action.payload}
                case 'phoneNumber':
                return {...state,phoneNumber:action.payload}
            case 'setFromSessionData':
                return {
                    ...state,
                    username:action.payload.username,
                    email:action.payload.email,
                    phoneNumber:action.payload.phoneNumber
                }
        default:
            return state
    }
}