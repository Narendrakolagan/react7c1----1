import './index.css'

const DenominationItem = props => {
  const {denominationDetails, deductAmount} = props
  const {id, value} = denominationDetails

  const onDeduct = () => {
    deductAmount(value)
  }
  return (
    <li>
      <button className="button" type="button" onClick={onDeduct}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
