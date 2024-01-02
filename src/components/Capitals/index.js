import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {selectedItem: countryAndCapitalsList[0]}

  onSelectedItem = event => {
    const {value} = event.target
    const selectItem = countryAndCapitalsList.find(each => each.id === value)
    this.setState({selectedItem: selectItem})
  }

  render() {
    const {selectedItem} = this.state
    const {country} = selectedItem
    return (
      <div className="app-container">
        <div className="sub-app-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="capital-container">
            <select className="capitals-list" onChange={this.onSelectedItem}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} className="capital" value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="query">is capital of which country</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
