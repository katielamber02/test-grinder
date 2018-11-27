import {
	FETCH_USERS
} from './types'

import axios from 'axios'


export function fetchUsers(){
	//const request=axios.get('http://jsonplaceholder.typicode.com/users')
	
	return{
		type:FETCH_USERS,
		payload:[
		{name:'John',id:1},
		{name:'Mary',id:2},
		{name:'Alex',id:3}
		]
	}
}