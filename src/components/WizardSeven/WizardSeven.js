import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { updateCredit } from '../../ducks/reducer';
import {connect} from 'react-redux'

class WizardSeven extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>Estimate your credit score</p> <br />
                    
                    <div className="row">
                        <Link to="/wEight"><button onClick={()=> this.props.updateCredit("E")}>Excellent</button></Link>
                        <Link to="/wEight"><button onClick={()=> this.props.updateCredit('G')}>Good</button></Link>
                        <Link to="/wEight"><button onClick={()=> this.props.updateCredit('F')}>Fair</button></Link>
                        <Link to="/wEight"><button onClick={()=> this.props.updateCredit('P')}>Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        credit: state.credit
    }
}

export default connect(mapStateToProps, {updateCredit})(WizardSeven);