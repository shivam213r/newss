import React, { Component } from 'react'
import Newsection from './Newsectn'

export default class Dedicated extends Component {
    getCurrentDate() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        return today.toLocaleDateString(undefined, options);
      }
      render() {
        const currentDate = this.getCurrentDate();
        let {endpoint,title,setprogress,eapi}=this.props
    return (
<Newsection heading={title} date={currentDate} endpoint={endpoint} setprogress={setprogress} eapi={eapi}/>    )
  }
}
