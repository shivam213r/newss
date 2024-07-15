
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dedicated from './components/Dedicated';
import LoadingBar from 'react-top-loading-bar'
import Sample from './components/Sample';

export default class App extends Component {
  // static propTypes = {second: third}
  state ={
    progress: 0,
    query: ""
  }
  setprogress=(progress)=>{
    this.setState({progress: progress})
  }
  handleSear = (query)=>{
      this.setState({query: query})
  }

  render() {
    return (
     <BrowserRouter>
     <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
    <Sample searchn={this.handleSear}/>
     <Routes>
     <Route path="/" element={<Home setprogress={this.setprogress}/>}></Route>
     <Route path="/sports" element={<Dedicated setprogress={this.setprogress} key="sports" endpoint={"&category=sports"} title={"Sports"} eapi={false}/>}></Route>
     <Route path="/entertainment" element={<Dedicated setprogress={this.setprogress} key="entertainment" endpoint={"&category=entertainment"} title={"Entertainment"} eapi={false}/>}></Route>
     <Route path="/health" element={<Dedicated setprogress={this.setprogress} key="health" endpoint={"&category=health"} title={"Health"}/>} eapi={false}></Route>
     <Route path="/technology" element={<Dedicated setprogress={this.setprogress} key="technology" endpoint={"&category=technology"} title={"Technology"} eapi={false}/>}></Route>
     <Route path="/business" element={<Dedicated setprogress={this.setprogress} key="business" endpoint={"&category=business"} title={"Business"} eapi={false}/>}></Route>
     <Route path="/science" element={<Dedicated setprogress={this.setprogress} key="science" endpoint={"&category=science"} title={"Science"} eapi={false}/>}></Route>
     <Route path={"/"+this.state.query} element={<Dedicated setprogress={this.setprogress} key={this.state.query} endpoint={"q="+this.state.query} title={this.state.query} eapi={true}  />}></Route>
     </Routes>
     </BrowserRouter>
      
      
    )
  }
}

