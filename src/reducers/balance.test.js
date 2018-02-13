import balanceReducer from './balance'
import * as constants from '../actions/constants'

describe('balanceReducer', () => {
  it('sets a balance', () => {
    const balance = 10

    expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
      .toEqual(balance)
  })

  it('deposits into the balance', () => {
    const deposit = 10
    const initialBalance = 5

    expect(balanceReducer(initialBalance, { type: constants.DEPOSIT, deposit}))
      .toEqual(deposit + initialBalance)
  })

  it('withdraws from the balance', () => {
    const withdrawal = 5
    const initialBalance = 15

    expect(balanceReducer(initialBalance, { type: constants.WITHDRAWAL, withdrawal }))
      .toEqual(initialBalance - withdrawal)
  })
})
