import Switch from "react-switch";
import './header.css';

import { HiOutlineLogout, HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ThemeContext } from '../../context/ThemeProvider';

const Header = () => {

  const { user, logout } = useContext(AuthContext);
  const { theme, toggleDarkTheme } = useContext(ThemeContext);

  return (
    <div className="header">
      <div className="user-info">
        <img src={user?.image} alt={`${user?.name} Avatar`} />
        <p>{user?.name}</p>
      </div>

      <div className="user-options">

        <Switch
          checked={theme === 'dark'}
          onChange={() => toggleDarkTheme()}
          uncheckedIcon={<div className="icon-toggle"><HiOutlineMoon /></div>}
          checkedIcon={<div className="icon-toggle"><HiOutlineSun /></div>}
          height={23}
          width={58}
          handleDiameter={18}
          onColor="#424242"
          className="toggle-theme"
        />

        <HiOutlineLogout
          className="pointer"
          size="1.3em"
          onClick={logout}
        />
      </div>
    </div>
  );
}

export default Header;
