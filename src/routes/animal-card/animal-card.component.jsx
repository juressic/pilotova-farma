import { useContext } from 'react';
import { AnimalContext } from '../../context/animals.context';

import './animal-card.style.scss';

import { useSelector } from 'react-redux';

import { selectSelectedAnimal } from '../../store/animal/animal.selector';

const AnimalCard = () => {
  //const { selectedAnimal } = useContext(AnimalContext);
  const selectedAnimal = useSelector(selectSelectedAnimal);

  const cardRow = (data) => {
    return data === '' ? 'nedefinirano' : data;
  };

  return (
    <div className="animal-card-container">
      <div className="animal-card-row">
        <span className="col1">Broj životinje</span>
        <span className="col2">{cardRow(selectedAnimal.broj_zivotinje)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Redni Broj</span>
        <span className="col2">{cardRow(selectedAnimal.redni_broj)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Remen</span>
        <span className="col2">{cardRow(selectedAnimal.remen)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">IKG Broj</span>
        <span className="col2">{cardRow(selectedAnimal.ikg_broj)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">JIBG</span>
        <span className="col2">{cardRow(selectedAnimal.jibg)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Spol</span>
        <span className="col2">{cardRow(selectedAnimal.spol)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Rasa</span>
        <span className="col2">{cardRow(selectedAnimal.rasa)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Uzrast</span>
        <span className="col2">{cardRow(selectedAnimal.uzrast)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Datum Rođenja</span>
        <span className="col2">{cardRow(selectedAnimal.datum_rodenja)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Majka</span>
        <span className="col2">{cardRow(selectedAnimal.majka)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Otac</span>
        <span className="col2">{cardRow(selectedAnimal.otac)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Farma</span>
        <span className="col2">{cardRow(selectedAnimal.farma)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Mjesto</span>
        <span className="col2">{cardRow(selectedAnimal.mjesto)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Boks</span>
        <span className="col2">{cardRow(selectedAnimal.boks)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Težina</span>
        <span className="col2">{cardRow(selectedAnimal.tezina)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Vlasnik</span>
        <span className="col2">{cardRow(selectedAnimal.vlasnik)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Aktivnost</span>
        <span className="col2">{cardRow(selectedAnimal.aktivnost)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Stari Vlasnik</span>
        <span className="col2">{cardRow(selectedAnimal.stari_vlasnik)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Datum Dolaska</span>
        <span className="col2">{cardRow(selectedAnimal.datum_dolaska)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Datum Odlaska</span>
        <span className="col2">{cardRow(selectedAnimal.datum_odlaska)}</span>
      </div>
      <div className="animal-card-row">
        <span className="col1">Način Odlaska</span>
        <span className="col2">{cardRow(selectedAnimal.nacin_odlaska)}</span>
      </div>
    </div>
  );
};

export default AnimalCard;
