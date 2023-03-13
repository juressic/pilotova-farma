import './farm-select.style.scss';

const FarmSelect = () => {
  return (
    <div className="custom-select">
      <select name="farms" id="farms">
        <option value="bair">Bair</option>
        <option value="kricke">Kričke</option>
      </select>
    </div>
  );
};

export default FarmSelect;
