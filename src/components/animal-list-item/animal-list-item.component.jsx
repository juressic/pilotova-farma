import './animal-list-item.style.scss';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { AnimalContext } from '../../context/animals.context';

import { useDispatch } from 'react-redux';

import { setSelectedAnimal } from '../../store/animal/animal.action';

import AnimalIcon from '../animal-icon/animal-icon.component';

const AnimalListItem = ({ animal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSetSelectedAnimal = () => {
    dispatch(setSelectedAnimal(animal));
    navigate('/animal');
    console.log(animal);
  };

  return (
    <button className="animal-list-item" onClick={handleSetSelectedAnimal}>
      <AnimalIcon animal={animal} />
      <div
        className={
          animal.aktivnost === 'DA'
            ? 'animal-active-indicator'
            : 'animal-unactive-indicator'
        }
      />
      <span>{animal.broj_zivotinje}</span>
    </button>
  );
};

export default AnimalListItem;
