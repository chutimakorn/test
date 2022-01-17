import {
    SET_ROUTE,
    SET_OWN_REQUEST,
    SET_USER
} from "../Actions/types";

const initialState = {
    routeName: "Screen1",

    ownRequest: {
        email: "",
        citizen: "",
        idNumber: "",
        share: "",
        name: "",
        surname: "",
        mobile: "",
        status: ""
    },
    auth: {
        lineID:"",
        lineToken:""
    }
}


export const routeReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ROUTE: {
            const { routeName, routeAction, routeParams } = action.payload;
            return { ...state, routeName, routeAction, routeParams };
        }
        case SET_OWN_REQUEST: {
            return {
                ...state,
                ownRequest: {
                    email: action.payload.requestData.email,
                    citizen: action.payload.requestData.citizen,
                    idNumber: action.payload.requestData.idNumber,
                    share: action.payload.requestData.share,
                    name: action.payload.requestData.name,
                    surname: action.payload.requestData.surname,
                    mobile: action.payload.requestData.mobile,
                    status: action.payload.requestData.status
                }
            };
        }
        case SET_USER: {
            return {
                ...state,
                auth: {
                    lineID:action.payload.authData.lineID,
                    lineToken:action.payload.authData.lineToken
                }
            };
        }
        default:
            return state;
    }

}