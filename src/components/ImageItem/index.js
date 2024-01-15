import './index.css'

const ImageItem = props => {
  const {imageDetails, clickThumbnailImage} = props
  const {thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    clickThumbnailImage(imageDetails)
  }

  return (
    <li className="lists">
      <img
        src={thumbnailUrl}
        alt="thumbnail"
        height="100px"
        width="100px"
        onClick={onClickThumbnail}
      />
    </li>
  )
}

export default ImageItem
