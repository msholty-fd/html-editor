import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';

export default class UniversalLayout extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        <AppBar
          title="Editor"
          onTitleTouchTap={() => browserHistory.push('/')}
          iconElementLeft={this.menuButton}
        />
        {this.props.children}
      </div>
    );
  }
}
