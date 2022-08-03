import * as React from "react";
import styles from './../FirstApp.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Header = () => {
	return(
		<div>
			<header className="bg-success notes-title">
				<p className={styles.titleText}> My Notes
					<span className="badge badge-light" id="badgeCount">{0}</span>
				</p>
			</header>
		</div>
	);
}