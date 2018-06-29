import React, { Component } from 'react'
import Modellist from './list/Modellist'
import SearchBar from './SearchBar'




class App extends React.Component {

  constructor(){
    super()
    this.state = {
      filteredHondaModelList: [],
      hondamodelList: [],
      searchString: " ",
      cart:[],

    }
  }

updateSearchString(searchStringAsAnInput){
  this.setState({
    searchString: searchStringAsAnInput
  }, ()=>{
    if(searchStringAsAnInput != " "){
      let newFilteredHondamodelList = this.state.hondamodelList.filter((eachHondamodel)=>{
        return eachHondamodel.hondacarModel.indexOf(searchStringAsAnInput) > -1
      })

      this.setState({
        filteredHondaModelList: newFilteredHondamodelList
      })

    }else{
      this.setState({
      filteredHondaModelList: this.state.hondamodelList
      })
    }
  })
}
handleAddToCart(newHondacar){
  console.log("This is the message from App snd tis is the product that is clicked",newHondacar)
   let newCart = [...this.state.cart,newHondacar]
  this.setState({
    cart: newCart
  })

}
handleRemoveCart(newHondacar){
  let newCart = [...this.state.cart,newHondacar]
   let editCart = newCart.filter(elem => elem !== newCart[newCart.length-1])
   this.setState({
   cart: editCart
   })
}

  render(){
    return(
      <div className="App">
         <SearchBar searchString={this.state.searchString} cart={this.state.cart} thisIsFunctionASProp_updateSearchString={(searchStringInput)=>this.updateSearchString(searchStringInput)} />
         <Modellist cart={this.state.cart}  hondamodels = {this.state.hondamodelList}
          handleAddToCartInProductContainer ={(hondacar)=>this.handleAddToCart(hondacar)}
          handleToDeleteInProductContainer = {(hondacar)=>this.handleRemoveCart(hondacar)}/>
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
