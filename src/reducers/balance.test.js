import balanceReducer from './balance'
import balanceReducer2 from './balance'
import * as constants from '../actions/constants'

describe('balanceReducer', () => {

  describe('when initializing', () => {
    const balance = 10
  
    it('sets a balance', () => {
  
      expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
        .toEqual(balance)
    })
  
    describe('then re-initializing', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance)
      })
    })
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
