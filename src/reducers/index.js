import { combineReducers } from 'redux'

import balanceReducer from './balance'
import bitcoin from './bitcoin'

export default combineReducers({ balance: balanceReducer, bitcoin})
