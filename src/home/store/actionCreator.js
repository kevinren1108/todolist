import * as actionTypes from './actionTypes.js';
import axios from 'axios';

export const getDataList = () => {
  return (dispatch) => {
    axios.get('https://todolistserver1.herokuapp.com/api/notes')
      .then((res) => {
        const data = res.data;
        const action = {
          type: actionTypes.UPDATE_TODO_LIST,
          newData: data
        }
        dispatch(action);
      }
    ).catch(() =>{
      console.log("API offline")
    })
  }
};

