import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const AppBar = ({ isAuthenticated }) => (
  <header style={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

export default AppBar;
