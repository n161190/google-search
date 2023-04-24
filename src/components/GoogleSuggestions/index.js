// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
    suggetionDetailsList: suggestionsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = id => {
    const {suggetionDetailsList} = this.state
    const filteredUsersData = suggetionDetailsList.filter(
      each => each.id === id,
    )
    this.setState({
      suggetionDetailsList: filteredUsersData,
    })
  }

  render() {
    const {searchInput, suggetionDetailsList} = this.state
    const searchResults = suggetionDetailsList.filter(each =>
      each.suggestion.includes(searchInput),
    )
    return (
      <div className="con">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
            <ul>
              {searchResults.map(each => (
                <SuggestionItem
                  userDetails={each}
                  key={each.id}
                  deleteUser={this.deleteUser}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
