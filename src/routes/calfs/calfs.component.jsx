import './calfs.style.scss';
import { AnimalContext } from '../../context/animals.context';
import AnimalListItem from '../../components/animal-list-item/animal-list-item.component';
import { useEffect, useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectAnimalsData,
  selectFilteredAnimals,
} from '../../store/animal/animal.selector';
import { setFilteredAnimals } from '../../store/animal/animal.action';

const Calfs = () => {
  /*const { animalsData, filteredAnimals, setFilteredAnimals } =
    useContext(AnimalContext);*/

  const animalsData = useSelector(selectAnimalsData);
  const filteredAnimals = useSelector(selectFilteredAnimals);

  const dispatch = useDispatch();

  useEffect(() => {
    const calfs = animalsData.filter((animal) => animal.uzrast === 'Tele');
    dispatch(setFilteredAnimals(calfs));
  }, []);

  return (
    <div className="calfs-container">
      <div className="animal-list">
        {filteredAnimals.map((animal) => {
          return <AnimalListItem key={animal.id} animal={animal} />;
        })}
      </div>
    </div>
  );
};

export default Calfs;
