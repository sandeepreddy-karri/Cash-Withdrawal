// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationItem, withDraw} = props
  const {value, id} = denominationItem

  const onWithdrawal = () => {
    withDraw(id, value)
  }

  return (
    <li className="list-container">
      <button type="button" className="button" onClick={onWithdrawal}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
