import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import AnimalCard from './routes/animal-card/animal-card.component';
import Cows from './routes/cows/cows.component';
import Calfs from './routes/calfs/calfs.component';
import Calving from './routes/calving/calving.component';
import DataExport from './routes/data-export/data-export.component';
import Heifers from './routes/heifers/heifers.component';
import MicroLocations from './routes/micro-locations/micro-locations.component';
import Bulls from './routes/bulls/bulls.component';

import { setAnimalsData } from './store/animal/animal.action';
import { setFilteredAnimals } from './store/animal/animal.action';

import { selectAnimalsData } from './store/animal/animal.selector';
import { selectFilteredAnimals } from './store/animal/animal.selector';
import { setPregnantAnimals } from './store/animal/animal.action';

import { useDispatch, useSelector } from 'react-redux';

function App() {
  useSelector(selectAnimalsData);
  useSelector(selectFilteredAnimals);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      'https://pilotova-farma.banovina-agrar.hr/pilotova-farma/api/govedo/read.php'
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(setFilteredAnimals(data.data));
        return dispatch(setAnimalsData(data.data));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(
      'https://pilotova-farma.banovina-agrar.hr/pilotova-farma/api/gravidnost/read.php'
    )
      .then((res) => res.json())
      .then((data) => dispatch(setPregnantAnimals(data.data)));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/animal" element={<AnimalCard />} />
          <Route path="/cows" element={<Cows />} />
          <Route path="/calving" element={<Calving />} />
          <Route path="/data-export" element={<DataExport />} />
          <Route path="/heifers" element={<Heifers />} />
          <Route path="/micro-locations" element={<MicroLocations />} />
          <Route path="/calfs" element={<Calfs />} />
          <Route path="/bulls" element={<Bulls />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
