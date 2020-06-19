import React from 'react'

function HomeMain() {
  return (
    <div className="main-div">
      <h1>Main title</h1>
      <img alt="undabot" className="my-img" src="data:image/png;base64,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" />
      <p>lorem80Quis aliquip consequat ipsum duis laborum velit proident in enim sunt. Laborum enim occaecat nostrud pariatur eiusmod. Labore amet aliqua officia ad ea. Anim enim consectetur ea anim commodo veniam.Sit dolore consequat Lorem commodo fugiat proident deserunt et laboris dolore minim nisi consequat. Cupidatat duis proident amet duis. Labore qui velit ullamco anim consequat enim minim nulla veniam aute.</p>
      </div>
  )
}

export default HomeMain;