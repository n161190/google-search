// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {userDetails, deleteUser} = props
  const {id, suggestion} = userDetails
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li>
      <div>
        <p> {suggestion} </p>
        <button type="button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
