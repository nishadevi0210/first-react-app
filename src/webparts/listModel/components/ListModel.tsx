import * as React from 'react';
import styles from './ListModel.module.scss';
import { IListModelProps } from './IListModelProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class ListModel extends React.Component<IListModelProps, {}> {
  public render(): React.ReactElement<IListModelProps> {
    const { hasTeamsContext } = this.props;

    return (
      <section className={`${styles.listModel} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <h2>Sharepoint Lists: </h2>
          <div id="spListContainer" />
        </div>
      </section>
    );
  }
}
