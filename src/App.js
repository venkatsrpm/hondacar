import React, { Component } from 'react'
import Modellist from './list/Modellist'
import SearchBar from './SearchBar'




class App extends React.Component {

  constructor(){
    super()
    this.state = {
      hondamodelList: [],
      searchString: "",
      cart:[]
    }
  }

updateSearchString(searchStringAsAnInput){
  this.setState({
    searchString: searchStringAsAnInput
  })
}
handleAddToCart(hondacar){
  console.log("This is the message from App snd tis is the product that is clicked",hondacar)

  this.setState({
    cart: [...this.state.cart,hondacar]
  })

}

  render(){
    return(
      <div className="App">
         <SearchBar searchString={this.state.searchString} thisIsFunctionASProp_updateSearchString={(searchStringInput)=>this.updateSearchString(searchStringInput)} />
         <Modellist hondamodels = {this.state.hondamodelList} handleAddToCartInProductContainer ={(hondacar)=>this.handleAddToCart(hondacar)} />
      </div>
    );
  }

  componentDidMount (){
      fetch('https://api.myjson.com/bins/66kvy')
      .then(response => response.json())
      .then(data => {
        this.setState({ hondamodelList:data })
      })
      .catch(function(error){
         console.log(error)
     })



    }

}

export default App;
