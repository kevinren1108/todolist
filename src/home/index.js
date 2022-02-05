import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store/index.js';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { } from './style';


class Home extends Component {
  
  componentDidMount(){
    this.props.handleFetchSearchTrendingAPI()
  };

  makelist(){
    const {todoList} = this.props;
    let count = 0;
    const listLenght = todoList.length
    return(
      <List>
      {todoList.map((item,index)=>{
        return(
          count++,
          <div key={item+index}>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.content}
              />
            </ListItem>
            {count <  listLenght ? <Divider variant="inset" component="li" />:<></>}
          </div>    
        )
      })}
      </List>
    )
  }

  render() { 
    const { handleTagUpdate } = this.props
    return ( 
      <Box sx={{ margin: '2vh auto', width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <TextField sx={{width: '96%', margin: '1vh 2%'}} id="outlined-basic" label="Add new item" variant="outlined" onKeyUp={(e) => handleTagUpdate(e)}/>
        {this.makelist()}
      </Box>
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
    handleTagUpdate(e){
      console.log(e)
      if(e.key === "Enter")
      {
        console.log(e.target.value)
      }
    }
  }
};

export default connect(mapStateToProps, mapDispathToProps)(Home);