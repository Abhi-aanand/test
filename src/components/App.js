import React, { Component } from 'react'
import Dropdown from './Dropdown';
import Home from './Home'

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      isShow:false,
      selected:"Not Selected",

      // list to select
      items:["APPLE","BANANA","MANGO","ORANGE"]
    } 
  }

  //  hover to open the options 
  hoverMouse=()=>{
    this.setState({
      isShow:true
    })
  }


  // automatic close of options
  handleOnClick=(item)=>{
    this.setState({
      isShow:false,
      selected:item
    })
  }

  render() {
    return (
      <div className='app'>
        <Home isShow={this.state.isShow} hoverMouse={this.hoverMouse}/>
        {this.state.isShow?<Dropdown items={this.state.items} handleOnClick={this.handleOnClick}/>:""}
        <p className='ans-p'>Ans. {this.state.selected}</p>
      </div>
    )
  }
}

