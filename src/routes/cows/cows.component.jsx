import './cows.style.scss';
import CowsFilter from '../../components/category-filter/cow-filter.component';
import { AnimalContext } from '../../context/animals.context';
import { useContext, useEffect } from 'react';
import AnimalListItem from '../../components/animal-list-item/animal-list-item.component';

import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';

import { selectAnimalsData } from '../../store/animal/animal.selector';
import { selectFilteredAnimals } from '../../store/animal/animal.selector';

import { setFilteredAnimals } from '../../store/animal/animal.action';

const Cows = () => {
  /*const { filteredAnimals, setFilteredAnimals, animalsData } =
    useContext(AnimalContext);*/
  const dispatch = useDispatch();
  const animalsData = useSelector(selectAnimalsData);
  const filteredAnimals = useSelector(selectFilteredAnimals);

  useEffect(() => {
    const cows = animalsData.filter((animal) => animal.uzrast === 'Krava');
    dispatch(setFilteredAnimals(cows));
  }, []);

  return (
    <div className="cows-container">
      <CowsFilter />
      <div className="animal-list">
        {filteredAnimals.map((animal) => (
          <AnimalListItem key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default Cows;
