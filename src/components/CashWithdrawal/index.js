// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {Balance: 2000}

  withDraw = (id, value) => {
    const {Balance} = this.state
    const remainingBalance = Balance - value
    this.setState({Balance: remainingBalance})
  }

  render() {
    const {denominationsList} = this.props
    const {Balance} = this.state
    return (
      <div className="mainbg">
        <div className="containerbg">
          <div className="name-box">
            <p className="name-logo">S</p>
            <h1>Sarah Williams</h1>
          </div>

          <div className="balancebg">
            <p className="color-change">Your Balance</p>
            <div>
              <p>{Balance}</p>
              <p className="color-change">In Rupees</p>
            </div>
          </div>

          <p>Withdraw</p>
          <p className="color-change">CHOOSE SUM (IN RUPEES)</p>
          <ul className="unorderlist-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationItem={eachItem}
                key={eachItem.id}
                withDraw={this.withDraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
