1.
import { createStore } from 'redux';
createStore helps us create our store object, store is what actually holds our application state.

2.
import reducers from './reducers';
we don't need to put reducers/index here because by writing folder name, it knows we want to import index file

3.
Provider can have only one single child, Provider translates the states/data in the store into something that can be used by the react side of our app, basically provider do the communication with react.
        <Provider store={ createStore(reducers) }>
          <View>
            <Header headerText='Tech Stack'/>
            <LibraryList />
          </View>
        </Provider>

4.
This is the file where all the reducers will be imported.
import { combineReducers } from 'redux'; => Used to combine all the reducers, very clear by name
import LibraryReducer from './LibraryReducer';

export default combineReducers({
	libraries: LibraryReducer
});

5.
import data from './LibraryList.json';
export default () => data; //Whenever this reducer runs, we will always return our data

6.
In this file, we are going to write THE way by which we reach to our redux state and access some amount of data
import React from 'react';
import { connect } from 'react-redux'; Connect is used to connect a component to the redux store

class LibraryList extends React.Component {
  render() {
    return 1;
  }
}

//first argument connect gonna take is a function , we call it mapStateToProps because it so excatly as its name,
//It takes our global state(the data in our redux store) and provide them as prop to our Component

const mapStateToProps = state => console.log(state);//if we return an object from this function that's gonna show as props to our component

export default connect(mapStateToProps)(LibraryList);