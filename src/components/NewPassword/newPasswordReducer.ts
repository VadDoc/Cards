const InitialState = {
  pageTitle: 'New Password'
}

export const newPasswordReducer = (state: InitialStateNewPasswordType = InitialState, action: ActionsType): InitialStateNewPasswordType => {
  return state
}

export type InitialStateNewPasswordType = typeof InitialState
type ActionsType = { type: string }