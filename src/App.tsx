import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

import { useForm, SubmitHandler } from 'react-hook-form'
import CrudPage from './Components/CrudPage/CrudPage';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { IFetchObj, fetchData } from './slices/AsyncMethods/fetchData';
import MainPage from './Components/MainPage/MainPage';
import { createFirstValue } from './CreateFirstValue';


function App() {

  let dispatch = useDispatch()

  let allCourts = useSelector((state: RootState) => state.courts.value)
  let allManagers = useSelector((state: RootState) => state.managers.value)
  let allProcedures = useSelector((state: RootState) => state.procedures.value)



  useEffect(() => {
    createFirstValue()
  }, [])



  let courtsGET: IFetchObj = {
    method: 'GET',
    path: 'courts',
  }

  let proceduresGET: IFetchObj = {
    method: 'GET',
    path: 'procedures',
  }

  let managersGET: IFetchObj = {
    method: 'GET',
    path: 'arbitration-managers',
  }

  useEffect(() => {
    dispatch(fetchData(courtsGET))
    dispatch(fetchData(proceduresGET))
    dispatch(fetchData(managersGET))
  }, [])





  let mainPageLink = ['MainPage',]

  let myCRUDLinks = ['arbitration-managers', 'courts', 'procedures',];
  let myStateNames = ['managers', 'courts', 'procedures',]

  let myLinks = mainPageLink.concat(myCRUDLinks);

  return (
    <div className="App">
      <Navbar myLinks={myLinks} />

      <Routes >
        <Route path={mainPageLink[0]} element={<MainPage
          allCourts={allCourts}
          allManagers={allManagers}
          allProcedures={allProcedures} />} />



        {myCRUDLinks.map((item, index) => {
          if (item === 'procedures') {
            return (
              <Route path={item} element={<CrudPage nameCRUD={item} nameSTATE={myStateNames[index]} needSelect={{
                courts: allCourts,
                managers: allManagers
              }} />} />
            )
          }

          return (
            <Route path={item} element={<CrudPage nameCRUD={item} nameSTATE={myStateNames[index]} />} />
          )
        })}
      </Routes>

    </div>
  );
}

export default App;
