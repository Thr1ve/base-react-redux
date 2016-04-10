import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchUsersIfNeeded } from '../actions';

import Users from '../components/Users';

const UsersContainer = React.createClass({
  componentDidMount() {
    this.props.dispatch(fetchUsersIfNeeded());
  },

  render() {
    const { loading, users } = this.props;
    return <Users envMode={__DEV__} loading={loading} users={users} />;
  }
});

function mapStateToProps(state) {
  return {
    loading: state.userData.loading,
    users: state.userData.users
  };
}

export default connect(mapStateToProps)(UsersContainer);
