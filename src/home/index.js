import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store/index.js';

import { } from './style';

class Home extends Component {
  
  componentDidMount(){
    this.props.handleFetchSearchTrendingAPI()
  };

  render() { 
    const { todoList } = this.props
    return ( 
      <div>todoList</div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    todoList: state.getIn(['home','todoList']),
  }
};

const mapDispathToProps = (dispatch) => {
  return {
    handleFetchSearchTrendingAPI() {
      dispatch(actionCreators.getDataList());
    },
  }
};

export default connect(mapStateToProps, mapDispathToProps)(Home);