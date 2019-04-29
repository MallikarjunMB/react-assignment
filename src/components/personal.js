import React, { Component } from 'react'
import Pesonaldata from '../jsons /personalform.json'
import { connect } from 'react-redux';
import { pesonalDetails } from './redux/actions/updateAction'

 class personal extends Component {
     componentDidMount(){
        this.props.pesonalDetails(Pesonaldata)
     }

  render() {  
      console.log("person ... props", this.props.person)
    
    const postItems = this.props.person.personalData.map(product => (
      <div>
      <br /><label>
          {product.label}: 
    <input type={product.inputType}  name={product.name} />
    </label><br />
    </div>

     ));
    return (
      <div>
        Personal Deatils form 
        <form>
        {postItems}
        </form>
      </div>
    )
  }
}
const mapStateToProps = (reduxState) => {
  
    return { person: reduxState }
  }

export default connect (mapStateToProps, {pesonalDetails} )(personal);