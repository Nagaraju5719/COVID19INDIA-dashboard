import {Component} from 'react'
import './index.css'

/* Dummy data to know where Iam getting wrong */

const faqsList = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon. kjhizhn igicbsz igih ihzihc kzc khgzihcgm zjguzb djzbdcz jzgdcuiz ',
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
  },
]

/* Dummy data to know where Iam getting wrong */

class About extends Component {
  state = {covidFaqs: faqsList}

  componentDidMount() {
    this.getFaqs()
  }

  getFaqs = async () => {
    const response = await fetch(
      'https://api.covid19india.org/website_data.json',
    )

    const faqData = await response.json()
  }

  render() {
    const {covidFaqs} = this.state
    const {questionText, answerText} = covidFaqs
    return (
      <div className="about-container">
        <div className="about-page-container">
          <h1 className="about-heading">About</h1>
          <p className="query-updation">Last updated on march 28th 2021.</p>
          <p className="vaccine-update">
            COVID19 vaccines be ready for distribution.
          </p>
          <div className="faqContainer">
            <h1 className="dummy">DUMMY DATA</h1>
            {faqsList.map(eachFaq => (
              <>
                <h1 className="question">{eachFaq.questionText}</h1>
                <p className="answer">{eachFaq.answerText}</p>
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
