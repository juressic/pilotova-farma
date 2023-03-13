const NavigateOption = ({ inputOptions }) => {
  return (
    <>
      <input {...inputOptions} />
      <label
        className="nav-option-label-container"
        htmlFor="navigation-zivotinje"
      >
        <img src="/icons/icons8-animals-100.png" alt="animals-icon" />
        <p>Životinje</p>
        <span>423</span>
      </label>
    </>
  );
};

export default NavigateOption;
