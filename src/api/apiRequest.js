import axios from 'axios'

// ** Store & Actions
import { setStatus, STATUSES } from '../redux/authentication'

const API_URL = 'http://100.26.167.192:5000/api/v1/jobs/'
export const body = new FormData()
export const apiHit = async ({ body, dispatch }) => {
  // ** Store Vars

  dispatch(setStatus(STATUSES.LOADING))
  return await axios
    .get(API_URL, body, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then((res) => {
      dispatch(setStatus(STATUSES.IDLE))
      return res.data
    })
    .catch((err) => {
      dispatch(setStatus(STATUSES.ERROR))
      return err
    })
}