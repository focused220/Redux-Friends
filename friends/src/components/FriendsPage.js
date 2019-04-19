import React from 'react';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getData} from '../actions/index';


class FriendsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            friends: [],
            fetching: false
        };
        console.log(this.props)
    }    

    componentDidMount(){
        this.props.getData();
        this.setState({
            friends: this.props.friends,
            fetching: false
        });
        
    }

    render(){
        return(
            <div>
                <div classname='friends-list'>
                    {this.state.friends.map(friend => {
                        return(
                            <ul>
                                <li>{friend.name}</li>
                                <li>{friend.age}</li>
                                <li>{friend.email}</li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({friends, fetching}) => ({
    friends,
    fetching
});

export default withRouter(
    connect(
        mapStateToProps,
        {getData}
    )(FriendsPage)
);