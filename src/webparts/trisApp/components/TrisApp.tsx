import * as React from 'react';
import styles from './TrisApp.module.scss';
import { ITrisAppProps } from './ITrisAppProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Game } from './myComponents/Game';
                                                                                   
class TrisApp extends React.Component<ITrisAppProps, {}> 
{
  public render(): React.ReactElement<ITrisAppProps> // bcoz it renders a react element! 
  {
    const { description, isDarkTheme, hasTeamsContext, userDisplayName } = this.props;

    return (
      <section className={`${styles.trisApp} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Welcome {escape(userDisplayName)}!</h2>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
        </div>
        <Game />
      </section>
    );
  }
}
export default TrisApp;