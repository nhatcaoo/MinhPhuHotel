import _ from 'lodash'
import state from './state'
import action from './action'
import setter from './setter'
export default _.merge(state, action, setter)
