import './calving.style.scss';
import { AnimalContext } from '../../context/animals.context';
import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CalvingListItem from '../../components/calving-list-item/calving-list-item.component';

import {
  selectPregnantAnimals,
  selectAnimalsData,
  selectFilteredAnimals,
} from '../../store/animal/animal.selector';

import { setFilteredAnimals } from '../../store/animal/animal.action';

const Calving = () => {
  /*const { pregnantAnimals, animalsData, setFilteredAnimals, filteredAnimals } =
    useContext(AnimalContext);*/

  const dispatch = useDispatch();
  const pregnantAnimals = useSelector(selectPregnantAnimals);
  const animalsData = useSelector(selectAnimalsData);
  const filteredAnimals = useSelector(selectFilteredAnimals);

  const findPregnantAnimals = () => {
    if (pregnantAnimals === undefined) return;
    const pregnantAnimalIds = pregnantAnimals.map((animal) => {
      return { govedo_id: animal.govedo_id };
    });
    //console.log('Pregnant Animals Ids', pregnantAnimals);

    const filteredAnimalsData = animalsData
      .filter((animal) => {
        const found = pregnantAnimalIds.find(
          (pregnantAnimal) => pregnantAnimal.govedo_id === animal.id
        );
        if (found) {
          return true;
        }
        return false;
      })
      .map((animal) => {
        const found = pregnantAnimals.find(
          (pregnantAnimal) => pregnantAnimal.govedo_id === animal.id
        );
        const pregnantAnimal = { ...found }; // create a copy of the matching pregnant animal object
        return { ...animal, ...pregnantAnimal }; // merge the properties of both objects into a new object
      });
    dispatch(setFilteredAnimals(filteredAnimalsData));
  };

  useEffect(() => {
    findPregnantAnimals();
  }, []);

  return (
    <div className="calving-container">
      {filteredAnimals.map((animal, index) => {
        return <CalvingListItem key={index} animal={animal} />;
      })}
    </div>
  );
};

export default Calving;
