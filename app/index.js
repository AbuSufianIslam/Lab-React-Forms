import React from 'react'
import ReactDOM from 'react-dom'

class Form extends React.Component {
  render () {
    return (
      <div id='container'>
        <div id='navbar'>
          Form.js
        </div>
        <form>
          {/* your form fields here */}
        </form>
      </div>
    )
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('app')
)
