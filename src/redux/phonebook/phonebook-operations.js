import axios from 'axios';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSucces,
  addContactError,
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
  deleteContactRequest,
  deleteContactSucces,
  deleteContactError,
} from './phonebook-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  try {
    const { data } = await axios.get('/contacts');
    return dispatch(fetchContactSuccess(data));
  } catch (error) {
    dispatch(fetchContactError(error.message));
  }

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(fetchContactSuccess(data)))
  //   .catch(error => dispatch(fetchContactError(error.message)));
};

const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSucces(data)))
    .catch(error => dispatch(addContactError(error.message)));
};

const updateContact = contactObj => async dispatch => {
  dispatch(updateContactRequest());
  const { id, name, number } = contactObj;
  try {
    const { data } = await axios.patch(`/contacts/${id}`, { name, number });
    return dispatch(updateContactSuccess(data));
  } catch (error) {
    dispatch(updateContactError(error.message));
  }
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSucces(contactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

const operations = {
  fetchContacts,
  addContact,
  updateContact,
  deleteContact,
};

export default operations;
