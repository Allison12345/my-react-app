import React from 'react'
function WarnBanner(props) {
  if (!props.warn) {
    return null
  } else {
    return <div className="warning">warning!</div>
  }
}
export default WarnBanner