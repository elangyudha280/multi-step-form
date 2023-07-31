export default function reducerPersonalInfo(state,action){
    switch (action.type) {
        case 'setUsername':
            return {...state,username:action.payload}
            case 'setEmail':
                return {...state,email:action.payload}
                case 'phoneNumber':
                return {...state,phoneNumber:action.payload}
        default:
            return state
    }
}