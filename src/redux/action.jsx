import axios from 'axios';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const registerSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});


export const registerUser = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('Register API', formData);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure(error));
  }
};
export const verifyOTP = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('Verify API', formData);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure(error));
  }
};
