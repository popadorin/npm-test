// // actions/index.js imports all actions from its directory and exports them
// import * as accountActions from './accountActions'
// import * as cartActions from './cartActions'

// export {
//   accountActions,
//   cartActions
// }

// index.js imports the index.js files from each of these directories,
// representing the combined exports of each of those folders
import * as actions from './actions'
import * as types from './types'
import * as reducers from './reducers'
import utils from './utils'

export {
  actions, types, reducers, utils 
}

// class Helper {
// 	static getFunnyName() {
// 		return 'Jora';
// 	}
// }

// module.exports = Helper;
