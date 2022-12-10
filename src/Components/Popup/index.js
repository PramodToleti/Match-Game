import './index.css'

const Popup = props => {
  const {isPopupLoaded, onStartGame} = props
  const onClickStart = () => {
    onStartGame()
  }

  if (isPopupLoaded === true) {
    return (
      <>
        <div className="popup-container">
          <img
            src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1670525912/casual-life-3d-game-controller_mt1jnm.png"
            alt="game-icon"
            className="game-controller-icon"
          />
          <h1 className="game-name">Match Game</h1>
          <ul className="game-instructions-container">
            <li className="instruction">You have 60 secs maximum time limit</li>
            <li className="instruction">Try to match the correct image</li>
            <li className="instruction">+1 point for every correct answer</li>
            <li className="instruction">
              If answer is incorrect or time runs out, game ends
            </li>
          </ul>
          <button
            type="button"
            className="start-game-button"
            onClick={onClickStart}
          >
            Play
          </button>
        </div>
      </>
    )
  }

  return null
}

export default Popup
