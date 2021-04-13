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

const fetchContacts = () => dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSucces(data)))
    .catch(error => dispatch(addContactError(error)));
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
    .catch(error => dispatch(deleteContactError(error)));
};

const operations = {
  fetchContacts,
  addContact,
  updateContact,
  deleteContact,
};

export default operations;
