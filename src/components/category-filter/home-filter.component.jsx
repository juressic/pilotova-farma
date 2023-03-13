import { useContext } from 'react';
import './category-filter.style.scss';

//import { AnimalContext } from '../../context/animals.context';

import { useSelector, useDispatch } from 'react-redux';

import { setFilteredAnimals } from '../../store/animal/animal.action';
import { selectAnimalsData } from '../../store/animal/animal.selector';

const HomeFilter = () => {
  //const { animalsData, setFilteredAnimals } = useContext(AnimalContext);

  const animalsData = useSelector(selectAnimalsData);

  const dispatch = useDispatch();

  const handlerFilterChange = (e) => {
    switch (e.target.id) {
      case 'sve-zivotinje-filter':
        dispatch(setFilteredAnimals(animalsData));
        break;
      case 'veterinar-filter':
        const vetAnimals = animalsData.filter(
          (animal) => animal.bolestan === 'DA'
        );
        dispatch(setFilteredAnimals(vetAnimals));
        break;
      case 'bez-oznake-filter':
        const bezOznake = animalsData.filter(
          (animal) => animal.oznaka_uha !== null
        );
        dispatch(setFilteredAnimals(bezOznake));
        break;
      default:
        throw new Error('filter not found: ' + e.target.id);
    }
  };
  return (
    <div className="home-filter-panel">
      <input
        type="radio"
        id="sve-zivotinje-filter"
        name="zivotinje-filter"
        onChange={handlerFilterChange}
        defaultChecked
      />
      <label htmlFor="sve-zivotinje-filter">Sve Životinje</label>
      <input
        type="radio"
        id="veterinar-filter"
        name="zivotinje-filter"
        onChange={handlerFilterChange}
      />
      <label htmlFor="veterinar-filter">Veterinar</label>
      <input
        type="radio"
        id="bez-oznake-filter"
        name="zivotinje-filter"
        onChange={handlerFilterChange}
      />
      <label htmlFor="bez-oznake-filter">Bez Oznake</label>
    </div>
  );
};

export default HomeFilter;
