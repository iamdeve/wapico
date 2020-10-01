import React from 'react';
import classes from './TopNavBar.module.css';
import { Link } from 'react-router-dom';
import { Popover, Menu, Button, Position, toaster, Avatar , AddIcon} from 'evergreen-ui';
import HomeIcon from '../../../assets/icn-home.svg';

function TopNavBar(props) {
	return (
		<div className={classes.top__bar__wrapper}>
			<div className={classes.top__bar}>
				<div className={classes.logo}>
					<h3>
						WAP<span className={classes.logo__img}></span>CO
					</h3>
				</div>
				<div className={classes.right__links}>
					<ul>
						<li>
							<Link to='/home'>
								<img src={HomeIcon} alt='home' />
								<span>Home</span>
							</Link>
						</li>
						<li>
							<Popover
								position={Position.BOTTOM_LEFT}
								content={
									<Menu>
										<Menu.Group>
											<Menu.Item onSelect={() => toaster.notify('Share')}>Share...</Menu.Item>
											<Menu.Item onSelect={() => toaster.notify('Move')}>Move...</Menu.Item>
											<Menu.Item onSelect={() => toaster.notify('Rename')} secondaryText='⌘R'>
												Rename
											</Menu.Item>
										</Menu.Group>
										<Menu.Divider />
										<Menu.Group>
											<Menu.Item onSelect={() => toaster.danger('Delete')} intent='danger'>
												Delete
											</Menu.Item>
										</Menu.Group>
									</Menu>
								}>
								<Button marginRight={16}>
									<Avatar isSolid name='User Name' size={25} /> <span>Username</span> <span className='fa fa-caret-down' aria-hidden='true'></span>
								</Button>
							</Popover>
						</li>
					</ul>
				</div>
			</div>
			<div className={classes.bottom__bar}>
				<div className={classes.page__heading}>
					{props.icon ? (
						<span className={classes.icon}>
							<i className={props.icon}></i>
						</span>
					) : null}
					{props.img ? (
						<span className={classes.icon}>
							<img src={props.img} alt='icon' />
						</span>
					) : null}
					<h2>{props.heading}</h2>
					{props.subHeading ? <span className={classes.subHeading}>{props.subHeading}</span> : null}
				</div>
				<div className={classes.middle__items}></div>
				<div className={classes.back_link}>
					{props.customBtn ? (
						<Button className={classes.customBtn}>
							<span className={classes.Icon}><AddIcon  style={{height:'12px'}}/></span>
							<span>Add Gateway</span>
						</Button>
					) : (
						<Button>Back</Button>
					)}
				</div>
			</div>
		</div>
	);
}

export default TopNavBar;
