import './search.style.scss';
import { AnimalContext } from '../../context/animals.context';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { setSearchAnimals } from '../../store/animal/animal.action';
import { selectSearchAnimals } from '../../store/animal/animal.selector';

import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
  //const { searchAnimals, setSearchAnimals } = useContext(AnimalContext);

  const dispatch = useDispatch();
  const searchAnimals = useSelector(selectSearchAnimals);

  const searchHandler = (e) => {
    dispatch(setSearchAnimals(e.target.value));
    console.log(searchAnimals);
  };

  return (
    <div className="search-animals-container">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        className="search-animals-input"
        type="search"
        placeholder="Pretraži"
        onChange={searchHandler}
      />
    </div>
  );
};

export default Search;
