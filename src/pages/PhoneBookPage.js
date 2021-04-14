import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import { connect } from 'react-redux';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import operations from '../redux/phonebook/phonebook-operations';
import selectors from '../redux/phonebook/phonebook-selectors';

class PhoneBookPage extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    fetchContacts: PropTypes.func,
    isLoadingContacts: PropTypes.bool,
    error: PropTypes.string,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <ContactForm />
        <Filter />
        <ContactList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contacts: selectors.getAllContacts(state),
  isLoadingContacts: selectors.getLoading(state),
  error: selectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookPage);
