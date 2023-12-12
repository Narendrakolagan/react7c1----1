import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  deductAmount = value => {
    const {amount} = this.state

    this.setState(prevState => ({amount: prevState.amount - value}))
  }
  render() {
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="profile-container">
            <div className="profile-content">
              <h1 className="profile-text">S</h1>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="amount-content">
            <p className="your-balance">Your Balance</p>
            <div className="amount-container">
              <p className="amount">2000</p>
              <p2 className="amount-text">In Rupees</p2>
            </div>
          </div>

          <p className="withdraw">Withdraw</p>
          <p className="choosing">CHOOSE SUM (IN RUPEES)</p>
          <div className="lists">
            <ul className="lists-container">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  denominationDetails={eachItem}
                  deductAmount={this.deductAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
