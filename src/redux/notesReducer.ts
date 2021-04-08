export type NotesState = {
    notes: string[]
}

type Action = {
    type: "ADD_NOTE",
    payload: string
}

const initialState = {
    notes: []
}


export const notesReducer = (state:NotesState = initialState , action: Action) =>{

    switch(action.type){
        case "ADD_NOTE":{
            return {...state, notes: [...state.notes, action.payload]}
        }
        default: {
            return state
        }
    }
}