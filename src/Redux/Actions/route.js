import { SET_ROUTE ,SET_OWN_REQUEST} from './types'

export const setRoute = (routeName, routeAction, routeParams) => {
    return { type: SET_ROUTE, payload: { routeName, routeAction, routeParams } }
  }

  export const setOwnRequest = (requestData) => {
    return { type: SET_OWN_REQUEST, payload: { requestData} }
  }