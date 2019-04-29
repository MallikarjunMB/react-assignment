import {PERSONAL_DETAILS, EDUCATIONAL_DETAILS, COMPANY_DETAILS} from './types';

export const pesonalDetails = data => {
    return{
        type: PERSONAL_DETAILS,
        payload: data
    }
}

export const educationalDetails = list => {
    return{
        type: EDUCATIONAL_DETAILS,
        payload: list
    }
}

export const companyDetails = list => {
    return{
        type: COMPANY_DETAILS,
        payload: list
    }
}

