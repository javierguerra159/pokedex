import { configureStore } from '@reduxjs/toolkit'

import user from './slices/user.slices';

export default configureStore({
  reducer: {
    
    user
	}
})