import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, toggleActiveTab} = props
  const {tabId, displayText} = tabDetails
  const activeTabStyles = isActive ? 'active-tab' : ''

  const switchActiveTab = () => {
    toggleActiveTab(tabId)
  }

  return (
    <li className="tab-item-container">
      <button
        className="tab-switch-button"
        type="button"
        onClick={switchActiveTab}
      >
        <p className={`tab-name ${activeTabStyles}`}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
