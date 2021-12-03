const InitialState = {
  pageTitle: 'User Registration'
}

export const userRegistrationReducer = (state: InitialStateUserRegistrationType = InitialState, action: ActionsType): InitialStateUserRegistrationType => {
  return state
}

export type InitialStateUserRegistrationType = typeof InitialState
type ActionsType = { type: string }