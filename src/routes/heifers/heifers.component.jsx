import './heifers.style.scss';
import { AnimalContext } from '../../context/animals.context';
import { useEffect, useContext } from 'react';
import AnimalListItem from '../../components/animal-list-item/animal-list-item.component';

import { useSelector, useDispatch } from 'react-redux';

import {
  selectAnimalsData,
  selectFilteredAnimals,
} from '../../store/animal/animal.selector';
import { setFilteredAnimals } from '../../store/animal/animal.action';

const Heifers = () => {
  /*const { animalsData, filteredAnimals, setFilteredAnimals } =
    useContext(AnimalContext);*/

  const dispatch = useDispatch();
  const animalsData = useSelector(selectAnimalsData);
  const filteredAnimals = useSelector(selectFilteredAnimals);

  useEffect(() => {
    const heifers = animalsData.filter((animal) => {
      return animal.uzrast === 'Junac' || animal.uzrast === 'Junica';
    });
    dispatch(setFilteredAnimals(heifers));
  }, []);

  return (
    <div className="heifers-container">
      <div className="animal-list">
        {filteredAnimals.map((animal) => {
          return <AnimalListItem key={animal.id} animal={animal} />;
        })}
      </div>
    </div>
  );
};

export default Heifers;
