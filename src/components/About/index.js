import {Component} from 'react'
import './index.css'

class About extends Component {
  state = {covidFaqs: []}

  componentDidMount() {
    this.getFaqs()
  }

  getFaqs = async () => {
    const response = await fetch(
      'https://api.covid19india.org/website_data.json',
    )

    const faqData = await response.json()
    console.log(faqData)
    const {faq} = faqData
    console.log(faq)
    this.setState({covidFaqs: faq})
  }

  render() {
    const {covidFaqs} = this.state
    const {question, answer} = covidFaqs
    return (
      <div className="about-container">
        <div className="about-page-container">
          <h1 className="about-heading">About</h1>
          <p className="query-updation">Last updated on march 28th 2021.</p>
          <p className="vaccine-update">
            COVID19 vaccines be ready for distribution.
          </p>
          <div className="faqContainer">
            {covidFaqs.map(eachFaq => (
              <>
                <h1 className="question">{eachFaq.question}</h1>
                <p className="answer">{eachFaq.answer}</p>
              </>
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
      </div>
    )
  }
}
export default About
