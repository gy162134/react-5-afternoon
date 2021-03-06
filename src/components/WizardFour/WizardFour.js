import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {updateFound} from '../../ducks/reducer'

class WizardFour extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">            
                    <p>Have you already found your new home?</p> <br />
                    
                    <div className="row">
                        <Link to="/wFive"><button onClick={e=> this.props.updateFound(e.target.value)}>Yes</button></Link>
                        <Link to="/wFive"><button onClick={e=> this.props.updateFound(e.target.value)}>No </button></Link>  
                    </div>         
                </div>
            </div>
        )
    }
}
function mapStatetoProps(state){
    return{
        found: state.found
    }
}

export default connect(mapStatetoProps, {updateFound})(WizardFour);