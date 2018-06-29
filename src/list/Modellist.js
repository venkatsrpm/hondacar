import React from 'react'
import Hondacar from '../../src/Hondacar'

const Modellist = (props) => {
  return(
    <div className="hondamodels">
     {

       props.hondamodels.map(function(eachHondamodel){
           return <Hondacar
           handleAddToCartInProduct={(hondacar)=>props.handleAddToCartInProductContainer(hondacar)}
           handleDeleteToCartInProduct={(hondacar)=>props.handleToDeleteInProductContainer(hondacar)}
            key={eachHondamodel.hondaId} hondacarModel={eachHondamodel.hondacarModel}
             hondacarPrice={eachHondamodel.hondacarPrice}
             hondaclass={eachHondamodel.hondaclass}
             hondacarImage={eachHondamodel.hondacarImage}
             hondaId={eachHondamodel.hondaId}
            isAddedToCart={props.cart.indexOf(eachHondamodel.hondaId) >= 0}
             />
        })
     }
    </div>

  );

}


export default Modellist;
