import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions'
//import '../style/style.css';

class UserList extends Component{
	componentWillMount(){
		this.props.fetchUsers()
		console.log('UserList props:',this.props)
	}
	renderUser(user){
		return(
		 <div className="card card-block" key={user.id}>
	       <h4 className="card-title">{user.name}</h4>
		   <p className="card-text">Cheese Factory </p>
		   <button className="btn btn-primary">Email</button>
		 </div>
		)
	}
	render(){
		return(
	      <div className="user-list">
		    User List
		    {this.props.users.map(this.renderUser)}
		  </div>	
 		)
	}
}
function mapStateToProps(state){
	return{
		users:state.users
	}
}
export default connect(mapStateToProps, actions)(UserList)