import './index.css'

const NavBar = props => {
  const {score, timer, timerColor, clockShake} = props
  return (
    <nav className="nav-bar">
      <div className="nav-header">
        <div className="game-icon-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="website-logo"
          />
        </div>
        <div className="score-details-container">
          <div className="score-container">
            <h1 className="score-heading">Score: </h1>
            <p className="score">{score}</p>
          </div>
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className={`timer-icon ${clockShake}`}
            />
            <p className={`timer-value ${timerColor}`}>{timer} sec</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
