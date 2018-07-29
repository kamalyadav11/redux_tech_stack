import React from 'react';
import { 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    View, 
    LayoutAnimation 
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from "./common";
import * as actions from '../actions';

class ListItem extends React.Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;
        // let pressed = true;

        if(expanded) {
            return (
                <CardSection>
                    <Text>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        const { textStyle } = styles;
        const { id, title } = this.props.library;
        const { expanded } = this.props;
        
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={textStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded };
    // return { selectedLibraryId: state.selectedLibraryId }
};

export default connect(mapStateToProps, actions)(ListItem);
