import * as actionTypes from './actionTypes.js';
import axios from 'axios';

export const getDataList = () => {
  return (dispatch) => {
    axios.get('https://todolistserver1.herokuapp.com/api/notes')
      .then((res) => {
        console.log(res)
      }
    ).catch(() =>{
      console.log("API offline")
    })
  }
};

