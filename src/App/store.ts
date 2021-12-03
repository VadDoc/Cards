import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {loginReducer} from "../components/Login/loginReducer";
import {newPasswordReducer} from "../components/NewPassword/newPasswordReducer";
import {profileReducer} from "../components/Profile/profileReducer";
import {recoveryPasswordReducer} from "../components/RecoveryPassword/recoveryPasswordReducer";
import {userRegistrationReducer} from "../components/UserRegistration/userRegistrationReducer";

const rootReducer = combineReducers({
  loginReducer,
  newPasswordReducer,
  profileReducer,
  recoveryPasswordReducer,
  userRegistrationReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof rootReducer>
