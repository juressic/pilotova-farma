import { Outlet } from 'react-router';
import './navigation.style.scss';
import NavigateOptions from '../../components/navigate-options/navigate-options.component';
import FarmSelect from '../../components/farm-select/farm-select.component';

const Navigation = () => {
  return (
    <>
      <div className="navigation-container">
        <img className="logo-image" src="/Logo.png" alt="logo" />
        {/*<FarmSelect />*/}
        <NavigateOptions />
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
