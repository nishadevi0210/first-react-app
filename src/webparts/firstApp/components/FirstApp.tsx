import * as React from 'react';
import styles from './FirstApp.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IFirstAppProps } from './IFirstAppProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Header } from './myComponents/Header';
import { List } from './myComponents/List';

export default class FirstApp extends React.Component<IFirstAppProps, {}> {
  public render(): React.ReactElement<IFirstAppProps> {
    const {
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.firstApp} ${hasTeamsContext ? styles.teams : ''}`}>
        <div>
          <h2>Welcome {escape(userDisplayName)}!</h2>
        </div>
        <br />
        <Header />
			  <List />
			  <br />
      </section>
    );
  }
}
