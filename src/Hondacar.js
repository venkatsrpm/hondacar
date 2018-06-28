import React,{Component} from 'react'
import PropTypes from 'prop-types'


class Hondacar extends Component {
  render() {
    return (
      <div className="hondacar">
        <div className="hondacar-image">
           <img src={this.props.hondacarImage}/>
         </div>
         <h4 className="hondacar-model"> {this.props.hondacarModel}</h4>
         <h4 className="hondacar-price"> ${this.props.hondacarPrice}</h4>
         <h4 className="hondacar-mpgrating">{this.props.hondaclass}</h4>
         <div className="hondacar-action">
             <button onClick={()=>this.props.handleAddToCartInProduct(this.props)} className="added" type="button">Added</button>
         </div>
      </div>
    );
  }
}

Hondacar.propTypes = {
  hondacarModel: PropTypes.string,
  hondacarPrice: PropTypes.number,
  hondaclass: PropTypes.string,
  hondacarImage: PropTypes.string
}

export default Hondacar;
