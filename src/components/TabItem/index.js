import './index.css'

const TabItem = props => {
  const {tabDetails, activeTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeIdText = isActive ? 'active' : ''

  const onActiveId = () => {
    activeTabId(tabId)
  }

  return (
    <li className="lists">
      <p className={`{text ${activeIdText}`} onClick={onActiveId}>
        {displayText}
      </p>
    </li>
  )
}

export default TabItem
