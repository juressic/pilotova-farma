import './navigate-options.style.scss';
import NavigateOption from './navigate-option/navigate-option.component';
import { useNavigate } from 'react-router';

const NavigateOptions = () => {
  const navigation = useNavigate();
  const handleOnChange = (e) => {
    navigation(e.target.attributes.nav.value);
  };

  return (
    <div className="nav-options-container">
      <input
        className="nav-options-input"
        type="radio"
        id="navigation-zivotinje"
        name="navigation"
        value="animals"
        onChange={handleOnChange}
        nav=""
        defaultChecked
      />
      <label
        className="nav-option-label-container"
        htmlFor="navigation-zivotinje"
      >
        <img src="/icons/icons8-animals-100.png" alt="animals-icon" />
        <p>Životinje</p>
        <span>423</span>
      </label>
      <input
        className="nav-options-input"
        type="radio"
        id="navigation-krave"
        name="navigation"
        value="cows"
        nav="cows"
        onChange={handleOnChange}
      />
      <label className="nav-option-label-container" htmlFor="navigation-krave">
        <img src="/icons/icons8-cow-96.png" alt="animals-icon" />
        <p>Krave</p>
        <span>325</span>
      </label>
      <input
        className="nav-options-input"
        type="radio"
        id="navigation-junci"
        name="navigation"
        value="heifers"
        nav="heifers"
        onChange={handleOnChange}
      />
      <label className="nav-option-label-container" htmlFor="navigation-junci">
        <img src="/icons/icons8-heifer-96.png" alt="animals-icon" />
        <p>Junci</p>
        <span>325</span>
      </label>
      <input
        className="nav-options-input"
        type="radio"
        id="navigation-telići"
        name="navigation"
        value="calfs"
        nav="calfs"
        onChange={handleOnChange}
      />
      <label className="nav-option-label-container" htmlFor="navigation-telići">
        <img src="/icons/icons8-calf-64.png" alt="animals-icon" />
        <p>Telići</p>
        <span>325</span>
      </label>
      <input
        className="nav-options-input"
        type="radio"
        id="navigation-bikovi"
        name="navigation"
        value="bulls"
        nav="bulls"
        onChange={handleOnChange}
      />
      <label className="nav-option-label-container" htmlFor="navigation-bikovi">
        <img src="/icons/icons8-bull-52.png" alt="animals-icon" />
        <p>Bikovi</p>
        <span>325</span>
      </label>
      <hr />
      <input
        className="nav-options-input"
        type="radio"
        id="navigation-teljenja"
        name="navigation"
        value="teljenja"
        nav="calving"
        onChange={handleOnChange}
      />
      <label
        className="nav-option-label-container"
        htmlFor="navigation-teljenja"
      >
        <img src="/icons/icons8-calf-64.png" alt="animals-icon" />
        <p>Teljenja</p>
        <span>325</span>
      </label>
      <hr />
      <input
        className="nav-options-input"
        type="radio"
        id="navigation-mikrolokacije"
        name="navigation"
        value="mikrolokacije"
        nav="micro-locations"
        onChange={handleOnChange}
      />
      <label
        className="nav-option-label-container"
        htmlFor="navigation-mikrolokacije"
      >
        <img src="/icons/icons8-farm-64.png" alt="animals-icon" />
        <p>Mikrolokacije</p>
        <span>325</span>
      </label>
      <input
        className="nav-options-input"
        type="radio"
        id="navigation-izvoz-podataka"
        name="navigation"
        value="izvoz-podataka"
        nav="data-export"
        onChange={handleOnChange}
      />
      <label
        className="nav-option-label-container"
        htmlFor="navigation-izvoz-podataka"
      >
        <img src="/icons/icons8-document-96.png" alt="animals-icon" />
        <p>Izvoz podataka</p>
        <span>325</span>
      </label>
      <hr />
      <div className="checkbox-container">
        <input
          className="nav-checkbox-input"
          type="checkbox"
          id="navigation-prikazuj-neaktivne"
        />
        {/*
        <label
          className="checkbox-label"
          htmlFor="navigation-prikazuj-neaktivne"
        >
          Prikazuj neaktivne
        </label>*/}
      </div>
    </div>
  );
};

export default NavigateOptions;
