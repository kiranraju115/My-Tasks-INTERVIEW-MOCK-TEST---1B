import {TagItem, ThumbButton} from './componentStyle'

const ThumbNails = Props => {
  const {thumbNail, onThumbNail, isThumbActive} = Props
  const {optionId, displayText} = thumbNail
  const onThumbButton = () => {
    onThumbNail(optionId)
  }

  return (
    <TagItem>
      <ThumbButton
        type="button"
        onClick={onThumbButton}
        isThumbActive={isThumbActive}
      >
        {displayText}
      </ThumbButton>
    </TagItem>
  )
}

export default ThumbNails
