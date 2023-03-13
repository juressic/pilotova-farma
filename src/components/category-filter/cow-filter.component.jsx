import { useContext } from 'react';
import './category-filter.style.scss';

import { AnimalContext } from '../../context/animals.context';

import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';

import { setFilteredAnimals } from '../../store/animal/animal.action';
import { selectAnimalsData } from '../../store/animal/animal.selector';

const CowsFilter = () => {
  //const { animalsData, setFilteredAnimals } = useContext(AnimalContext);

  const animalsData = useSelector(selectAnimalsData);

  const dispatch = useDispatch();

  const handlerFilterChange = (e) => {
    switch (e.target.id) {
      case 'cows':
        const cows = animalsData.filter((animal) => animal.uzrast === 'Krava');
        dispatch(setFilteredAnimals(cows));
        break;
      case 'gravidnost':
        const gravidnost = animalsData.filter(
          (animal) => animal.gravidnost === 'DA'
        );
        dispatch(setFilteredAnimals(gravidnost));
        break;
      default:
        throw new Error('filter not found: ' + e.target.id);
    }
  };
  return (
    <div className="home-filter-panel">
      <input
        type="radio"
        id="cows"
        name="cows-filter"
        onChange={handlerFilterChange}
        defaultChecked
      />
      <label htmlFor="cows">Krave</label>
      <input
        type="radio"
        id="gravidnost"
        name="cows-filter"
        onChange={handlerFilterChange}
      />
      <label htmlFor="gravidnost">Gravidnost</label>
    </div>
  );
};

export default CowsFilter;
