import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';
// import Filter from './components/Filter/index';
import operations from './redux/phonebook/phonebook-operations';
import selectors from './redux/phonebook/phonebook-selectors';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PhoneBookPage from './pages/PhoneBookPage';
import Container from './components/Container';
import AppBar from './components/UserMenu/AppBar';

import { Route, Switch } from 'react-router';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/phonebook" component={PhoneBookPage} />
        </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
