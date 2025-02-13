import React from 'react';
import { TopBar } from '../../layout';
import classes from './Gateway.module.css';
import GateImg from '../../assets/icn-sensor.svg';
import { TextInputField, Button } from 'evergreen-ui';
function Gateway() {
	return (
		<div>
			<TopBar heading='+ Add a new gateway' img={GateImg} />
			<div className={classes.gateway__form__wrapper}>
				<form>
					<label>Enter gateway unique ID</label>
					<div className={classes.input__field}>
						<TextInputField placeholder='Enter ID' />
						<Button>Add Device</Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Gateway;
