import checker from './checker'
import logger from './logger'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

export default applyMiddleware(
  thunk, //ReduxThunk.default,
  checker,
  logger
)