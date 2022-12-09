import './index.css'

const DisplayItem = props => {
  const {imageDetails, checkThumbnail} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    checkThumbnail(id)
  }

  return (
    <li className="thumbnail-image-container">
      <button
        className="thumbnail-img-button"
        type="button"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default DisplayItem
