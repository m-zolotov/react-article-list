import {normalizedComments as defaultComments} from "../fixtures/fixtures";
//import {} from '../constants';

export default (commentsState = defaultComments, action) => {
    const {type, payload} = action;

    switch (type) {


        default: return commentsState
    }
}