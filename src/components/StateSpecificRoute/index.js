import {Component} from 'react'
import './index.css'

class SpecificStateDetails extends Component {
  render() {
    return (
      <div className="state-container">
        <div className="state-updation-cases">
          <div className="state-updation-left">
            <h1 className="state-name">Andaman and nicobar</h1>
            <p className="updated-date">LastUpdated on march</p>
          </div>
          <div className="state-updation-right">
            <p className="tested-cases-heading">Tested</p>
            <p className="total-tested-cases">316156416161</p>
          </div>
        </div>
        <div className="cards-container">
          <div className="card Confirmed-card">
            <p className="card-heading Confirmed">Confirmed</p>
            <p className="cases-count Confirmed">64646464</p>
          </div>
          <div className="card Active-card">
            <p className="card-heading Active">Active</p>
            <p className="cases-count Active">64646464</p>
          </div>
          <div className="card Recovered-card">
            <p className="card-heading Recovered">Recovered</p>
            <p className="cases-count Recovered">64646464</p>
          </div>
          <div className="card Deceased-card">
            <p className="card-heading Deceased">Deceased</p>
            <p className="cases-count Deceased">64646464</p>
          </div>
        </div>

        <h1 className="Confirmed">Top Districts</h1>
        <h1 className="spread-rends-heading">Spread Trends</h1>
        <div>
          <button type="button" className="button cumulative">
            Cumulative
          </button>
          <button type="button" className="button daily">
            Daily
          </button>
        </div>
      </div>
    )
  }
}

export default SpecificStateDetails
