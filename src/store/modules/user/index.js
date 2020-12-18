import _ from 'lodash'
import state from './state'
import setter from './setter'
import action from './action'

export default _.merge(state, setter, action)