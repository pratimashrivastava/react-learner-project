import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';
import styles from '../../App.css';

class LoginForm extends React.Component {
	state = {
		data: {
			email: '',
			password: ''
		},
		loading: false,
		errors: {}
	};

	onChange = e =>
		this.setState({
			data: { ...this.state.data, [e.target.name]: e.target.value }
		});

	onSubmit = () => {
		const errors = this.validate(this.state.data);
		this.setState({ errors });
		if (Object.keys(errors).length === 0) {
			this.props.submit(this.state.data);
		}
	};

	validate = data => {
		const errors = {};
		if (!Validator.isEmail(data.email)) errors.email = 'invalid email';
		if (!data.password) errors.password = 'can not be blank';
		return errors;
	};

	render() {
		const { data, errors } = this.state;
		return (
			<div className="loginFormCntr">
				<Form onSubmit={this.onSubmit}>
					<Form.Field>
						<div className="flexColumn">
							<label htmlFor="email" className="whiteText">Username</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="example@example.com"
								value={data.email}
								onChange={this.onChange} />
							{errors.email && <InlineError text={errors.email} />}
						</div>
					</Form.Field>
					<Form.Field>
						<div className="flexColumn">
							<label htmlFor="password" className="whiteText">Password</label>
							<input
								type="password"
								id="password"
								name="password"
								value={data.password}
								placeholder="make it secure"
								onChange={this.onChange} />
							{errors.password && <InlineError text={errors.password} />}
						</div>
					</Form.Field>
					<Button primary className="loginBtn">Login</Button>
				</Form>
			</div>
		);
	}
}

LoginForm.propTypes = {
	submit: PropTypes.func.isRequired
}

export default LoginForm;
