export default {
	user: {
		login: credentials => {
			let body = JSON.stringify({
				'authType': 'local',
				'email': credentials.email,
				'password': credentials.password,
			});

			let header = {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			};

			let url = 'https://friendo-stage.herokuapp.com/api/users/auth';
			fetch(url, {
				method: 'POST',
				headers: header,
				body: body
			}).then(response => console.log('dbg2: ', response.json()))
				.catch(e => console.log('dbg1:', e))
		}
	}
}
