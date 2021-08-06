// Dispatch SetTarget
// Once SetTarget Is Complete, 
import { optionsStore } from '../Store/optionsSlice'
import store from '../Store/store'
import { targetStore } from '../Store/targetSlice'
import { fetchOptions } from '../Store/optionsSlice'

export default function asyncDispatcher(payload){

  Promise.resolve(store.dispatch(targetStore(payload))).then(
    () => store.dispatch(fetchOptions())

  )
}

