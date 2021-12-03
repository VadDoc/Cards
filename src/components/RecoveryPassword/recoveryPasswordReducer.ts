const InitialState = {
  pageTitle: 'Recovery Password'
}

export const recoveryPasswordReducer = (state: InitialStateRecoveryPasswordType = InitialState, action: ActionsType): InitialStateRecoveryPasswordType => {
  return state
}

export type InitialStateRecoveryPasswordType = typeof InitialState
type ActionsType = { type: string }