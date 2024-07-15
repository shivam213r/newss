import React, { Component } from 'react'
import '../sass/loading.scss'

export default class Loading extends Component {
  render() {  
    return (
      <div className="container text-center">

        <div className="lds-spinner "><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}

