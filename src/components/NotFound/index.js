import {withRouter} from 'react-router-dom'
import './index.css'

const NotFound = props => {
  const onClickHome = () => {
    const {history} = props

    history.replace('/')
  }
  return (
    <div className="not-found-container">
      <img
        src="https://blog.fluidui.com/content/images/2019/01/designernews.png"
        alt="not-found"
        className="not-found-img"
      />
      <h1 className="page-error">PAGE NOT FOUND</h1>
      <p className="page-suggestion">
        We're sorry, the page you requested could not be found <br />
        Please go back to the homepage
      </p>

      <div>
        <button type="button" className="home-button" onClick={onClickHome}>
          Home
        </button>
      </div>
    </div>
  )
}

export default withRouter(NotFound)
