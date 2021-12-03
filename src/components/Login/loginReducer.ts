const InitialState = {
  pageTitle: 'Login'
}

export const loginReducer = (state: InitialStateLoginType = InitialState, action: ActionsType): InitialStateLoginType => {
  return state
}

export type InitialStateLoginType = typeof InitialState
type ActionsType = { type: string }