import { PERSONAL_DETAILS, EDUCATIONAL_DETAILS, COMPANY_DETAILS } from '../actions/types'


const initialState = {
personalData:[],
educationalData:[], 
companyData:[]
}

export default function (state = initialState, action){

    switch(action.type){
        case PERSONAL_DETAILS:
        // const newState = { ...state}
        // console.log('newstate', newState)
        // newState.datas.push(action.payload)
        // return newState;
        // console.log('preeee', state)
        return {
            ...state,
            personalData:action.payload
            
        }
        case EDUCATIONAL_DETAILS:
        return {
            ...state,
            educationalData:action.payload
        }
        case COMPANY_DETAILS:
        return {
            ...state,
            companyData:action.payload
        }

        default:
        return state;
    }

}