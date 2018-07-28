import React from 'react';
import { connect } from 'react-redux';

class LibraryList extends React.Component {
  render() {
    console.log("*****   " + JSON.stringify(this.props));
    return 1;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);