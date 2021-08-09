import {Component} from 'react'

import SpecificStateDetails from '../StateSpecificRoute'

import './index.css'

class Home extends Component {
  state = {stateCasesList: [], searchInput: ''}

  componentDidMount() {
    this.getCovidData()
  }

  getCovidData = async () => {
    const response = await fetch(
      'https://api.covid19india.org/v4/min/data.min.json',
    )
    const fetchedData = await response.json()

    const {
      AN,
      AP,
      AR,
      AS,
      BR,
      CH,
      CT,
      DL,
      DN,
      GA,
      GJ,
      HP,
      HR,
      JH,
      JK,
      KA,
      KL,
      LA,
      LD,
      MH,
      ML,
      MN,
      MP,
      MZ,
      NL,
      OR,
      PB,
      PY,
      RJ,
      SK,
      TG,
      TN,
      TR,
      TT,
      UP,
      UT,
      WB,
    } = fetchedData
    const a = [
      AN,
      AP,
      AR,
      AS,
      BR,
      CH,
      CT,
      DL,
      DN,
      GA,
      GJ,
      HP,
      HR,
      JH,
      JK,
      KA,
      KL,
      LA,
      LD,
      MH,
      ML,
      MN,
      MP,
      MZ,
      NL,
      OR,
      PB,
      PY,
      RJ,
      SK,
      TG,
      TN,
      TR,
      TT,
      UP,
      UT,
      WB,
    ]

    this.setState({stateCasesList: a})
  }

  getSearchedState = event => {
    const {statesList} = this.props
    console.log(event.target.value)

    this.setState({searchInput: event.target.value})
  }

  render() {
    const {stateCasesList, searchInput} = this.state

    return (
      <div className="home-container">
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png"
            alt="search"
            className="search-icon"
          />
          <input
            type="search"
            className="searchbar"
            placeholder="Enter the State/UT"
            onChange={this.getSearchedState}
          />
        </div>
        <div className="table-container">
          <div className="table-heading-container">
            <h1 className="column-name heading">States/UT</h1>
            <h1 className="column-name heading confirmed">Conformed</h1>
            <h1 className="column-name heading active">Active</h1>
            <h1 className="column-name heading recovered">Recovered</h1>
            <h1 className="column-name heading deceased">Deceased</h1>
            <h1 className="column-name heading population">Population</h1>
          </div>
          <hr className="horizontal-line" />

          {stateCasesList.map((each, index, arr) => (
            <div className="table-heading-container" key={each.index}>
              <h1 className="column-name">{index}</h1>
              <h1 className="column-name confirmed">{each.total.confirmed}</h1>
              <h1 className="column-name active">{each.total.tested}</h1>
              <h1 className="column-name recovered">{each.total.recovered}</h1>
              <h1 className="column-name deceased">{each.total.deceased}</h1>
              <h1 className="column-name population">{each.meta.population}</h1>
            </div>
          ))}
        </div>

        {/* FOOTER SECTION */}

        <div className="footer-section">
          <h1 className="footer-heading">
            COVID19<span className="country">INDIA</span>
          </h1>
          <p className="footer-description">
            We stand with everyone fighting on the front lines
          </p>
          <div className="footer-icons-list">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN0Uu0auB-_30X62d-vUYM-jhN4TkqPqgv6A&usqp=CAU"
              alt="icon"
              className="footer-icons"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ45TYXdgAJ1HJ8-tahLzEfx9gngXmi4a4kRA&usqp=CAU"
              alt="icon"
              className="footer-icons"
            />
            <img
              src="https://lh3.googleusercontent.com/proxy/tR__HgD-b6Q2QkOOBymFwMQj609pqbCv_LZ8ykwaEiX86RN8QLbii9aJ4h_iEM_pYBOuezmnztQu_TjUFjTxAD4oDJiaRVGqElR98ZTXzm0X51I89kvVyi2hl4_8LptYYNXn9v56hO1hTRaAZw"
              alt="icon"
              className="footer-icons"
            />
          </div>
        </div>
        {/* FOOTER SECTION */}
      </div>
    )
  }
}
export default Home
