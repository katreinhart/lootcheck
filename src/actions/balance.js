import * as constants from './constants'

export const setBalance = balance => {
  return {
    type: constants.SET_BALANCE,
    balance
  }
}

export const deposit = deposit => {
  return {
    type: constants.DEPOSIT,
    deposit
  }
}

export const withdrawal = withdrawal => {
  return {
    type: constants.WITHDRAWAL,
    withdrawal
  }
}