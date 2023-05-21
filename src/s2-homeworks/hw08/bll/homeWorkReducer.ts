import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortByName = (a: UserType, b: UserType) => {
                if (action.payload === 'up') {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                }
                if (action.payload === 'down') {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
                }
                return 0
            }
            return [...state].sort(sortByName) // need to fix
            // return [...state].sort((a,b) =>
            // action.payload === 'up'
            //     ? a.name.localeCompare(b.name)
            //     : b.name.localeCompare(a.name)
            // )
        }

        case 'check': {

            return state.filter(u => u.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
