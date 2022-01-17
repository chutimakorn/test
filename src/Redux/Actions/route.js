import { SET_ROUTE ,SET_OWN_REQUEST,SET_USER} from './types'

export const setRoute = (routeName, routeAction, routeParams) => {
    return { type: SET_ROUTE, payload: { routeName, routeAction, routeParams } }
  }

  export const setOwnRequest = (requestData) => {
    return { type: SET_OWN_REQUEST, payload: { requestData} }
  }
  export const setUser = (authData) => {
    return { type: SET_USER, payload: { authData} }
  }