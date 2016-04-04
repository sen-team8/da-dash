import { fetchIntranet } from '../network/intranet';
import ParseDate from '../helper/dateParse';

export const REQUEST_INTRANET_TREE = 'REQUEST_INTRANET_TREE';
export const RECEIVE_INTRANET_TREE = 'RECEIVE_INTRANET_TREE';
export const RECEIVE_INTRANET_ERROR = 'RECEIVE_INTRANET_ERROR';
export const GO_FORWARD = 'GO_FORWARD';
export const GOTO_STRINGPATH = 'GOTO_STRINGPATH';

export function requestIntranetTree() {
  return {
    type: REQUEST_INTRANET_TREE,
  };
}

export function receiveIntranetTree(response) {
  return {
    type: RECEIVE_INTRANET_TREE,
    tree: response.intranet,
    path: new Array(response.intranet),
    timeStamp: ParseDate.timeSince(response.timeStamp),
  };
}

export function receiveIntranetError(error) {
  return {
    type: RECEIVE_INTRANET_ERROR,
    error,
  };
}

export function goForward(location) {
  return {
    type: GO_FORWARD,
    location,
  };
}

export function goToStringPath(toPath) {
  return {
    type: GOTO_STRINGPATH,
    toPath,
  };
}

export function getIntranet() {
  return dispatch => {
    dispatch(requestIntranetTree());
    return fetchIntranet()
      .then((t) => dispatch(receiveIntranetTree(t)))
      .catch((e) => dispatch(receiveIntranetError(e)));
  };
}
