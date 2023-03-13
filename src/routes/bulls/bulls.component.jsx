import './bulls.style.scss';
import { AnimalContext } from '../../context/animals.context';
import AnimalListItem from '../../components/animal-list-item/animal-list-item.component';
import { useEffect, useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectAnimalsData,
  selectFilteredAnimals,
} from '../../store/animal/animal.selector';
import { setFilteredAnimals } from '../../store/animal/animal.action';

const Bulls = () => {
  /*const { animalsData, filteredAnimals, setFilteredAnimals } =
    useContext(AnimalContext);*/

  const dispatch = useDispatch();

  const animalsData = useSelector(selectAnimalsData);
  const filteredAnimals = useSelector(selectFilteredAnimals);

  useEffect(() => {
    const bulls = animalsData.filter((animal) => animal.uzrast === 'Bik');
    dispatch(setFilteredAnimals(bulls));
  }, []);
  return (
    <div className="bulls-container">
      <div className="animal-list">
        {filteredAnimals.map((animal) => {
          return <AnimalListItem key={animal.id} animal={animal} />;
        })}
      </div>
    </div>
  );
};

export default Bulls;
