import { useContext, useEffect } from 'react';
import './home.style.scss';
import { AnimalContext } from '../../context/animals.context';
import AnimalListItem from '../../components/animal-list-item/animal-list-item.component';
import HomeFilter from '../../components/category-filter/home-filter.component';
import Search from '../../components/search/search.component';

import { useSelector, useDispatch } from 'react-redux';

import { setFilteredAnimals } from '../../store/animal/animal.action';

import {
  selectAnimalsData,
  selectSearchAnimals,
} from '../../store/animal/animal.selector';
import { selectFilteredAnimals } from '../../store/animal/animal.selector';

const Home = () => {
  /*const { filteredAnimals, setFilteredAnimals, animalsData, searchAnimals } =
  useContext(AnimalContext);*/

  const dispatch = useDispatch();

  const animalsData = useSelector(selectAnimalsData);
  const searchAnimals = useSelector(selectSearchAnimals);
  const filteredAnimals = useSelector(selectFilteredAnimals);

  useEffect(() => {
    dispatch(setFilteredAnimals(animalsData));
  }, []);

  return (
    <div className="home-container">
      <HomeFilter />
      <Search />
      <div className="animal-list">
        {filteredAnimals.map((animal) => {
          if (
            animal.broj_zivotinje.includes(searchAnimals) || //.toLocaleUpperCase()
            searchAnimals === '' ||
            searchAnimals === undefined
          )
            return <AnimalListItem key={animal.id} animal={animal} />;
        })}
      </div>
    </div>
  );
};

export default Home;
