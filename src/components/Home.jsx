import React, { Component } from 'react'
import Newsection from './Newsectn'

export default class Home extends Component {
  getCurrentDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    return today.toLocaleDateString(undefined, options);
  }
  render() {
    const currentDate = this.getCurrentDate();
    let {setprogress}=this.props
    return (
      <>
      <Newsection heading={"Top Headlines"} date={currentDate} endpoint={null}  setprogress={setprogress} eapi={false}/>
      {/* <Newsection heading={"Sports"} date={null} endpoint={"&category=sports"} infi={false} setprogress={setprogress} eapi={false}/> */}
      </>
    )
  }
}

