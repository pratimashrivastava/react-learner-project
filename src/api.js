import axios from 'axios';

export default {
	user: {
		login: credentials => {
		/*	
		const authOptions = {
			method: 'POST',
			url: 'https://friendo-stage.herokuapp.com/api/users/auth',
			data: {
				'authType':'local',
				 'email': '1@7.com',
				 'password': 'pass1234',
			},
			headers: {
				'Accept': 'application/json',
		 		'Content-Type': 'application/json',
				// 'Access-Control-Allow-Origin': '*',
				// 'Access-Control-Allow-Credentials': 'true'
			},
			json: true
		};
	*/
			// axios(authOptions).then(res => console.log(res))
		// {
			
			let body = {
				'authType': 'local',
				'email': '1@a.com',
				'password': 'pass1234',
			};

		// 	// let body = {
		// 	// 	'authType': 'local',
		// 	// 	'email': 'pt',
		// 	// 	'password': 'pass1234',
		// 	// };
			
			let header = {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'x-access-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1OTdmMWZlYjRiZGJmMTAwMTA2NjZkMzUifQ.r-DbJU049rKBIsMufZ5opYiOLvNi43HlkmJqBmzjA24',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': 'true',
				'credentials': 'same-origin',
			};
			
		  let url = 'https://friendo-stage.herokuapp.com/api/users/auth';
			fetch(url, {
				method: 'POST',
				mode: 'no-cors',
				headers: header,
				body: JSON.stringify({
					authType:'local',
					email:'18',
					password:'pass1234'
				})
			}).then(response => console.log('dbg2: ', response.json()))
			.catch(e => console.log('dbg1:', e))
			
		// }

	}
}}
