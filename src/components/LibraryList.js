import React from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends React.Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) { //library is the first item that is being called when the list is rendered, element in the list that ListView is  currently render and we are going to pass this argument(library) as a prop to ListItem
    return <ListItem library={library}/>
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );   
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);