import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deposit, withdrawal } from '../actions/balance'

export class Wallet extends Component {
  constructor() {
    super()
    this.state = {
      balance: undefined
    }
  }

  updateBalance = e => {
    this.setState({ balance: parseInt(e.target.value, 10) })
  }

  deposit = () => this.props.deposit(this.state.balance)
  withdrawal = () => this.props.withdrawal(this.state.balance)

  render() {
    return(
      <div>
        <h3 className='balance'>Wallet Balance: { this.props.balance }</h3>
        <hr />
        <input className='input-wallet' onChange={this.updateBalance} />
        <button className='btn-deposit' onClick={this.deposit} >Deposit</button>
        <button className='btn-withdraw' onClick={this.withdrawal} >Deposit</button>
      </div>
    )
  }
}

export default connect(state => { return { balance: state }}, { deposit, withdrawal })(Wallet)
