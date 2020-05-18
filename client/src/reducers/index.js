import { combineReducers } from 'redux';

import breadcrumbsReducer from './breadcrumbsReducer';
import userReducer from './userReducer';

export default combineReducers({
    user: userReducer,
    breadcrumbs: breadcrumbsReducer
});