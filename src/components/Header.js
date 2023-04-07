
const Header = ({ onLogout }) => {
  return (
    <header>
      
      <button onClick={onLogout}>Logout</button>
    </header>
  );
};

export default Header;
