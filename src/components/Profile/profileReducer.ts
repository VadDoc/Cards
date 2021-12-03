const InitialState = {
  pageTitle: 'Profile'
}

export const profileReducer = (state: InitialStateProfileType = InitialState, action: ActionsType): InitialStateProfileType => {
  return state
}

export type InitialStateProfileType = typeof InitialState
type ActionsType = { type: string }