import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import NavBar from './components/navbar.component';
import ExerciseList from './components/exercise-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import UsersList from './components/userList.component';

function App() {
  return (
    <Router>
      <div className="container">
      <NavBar />
      <br />
      <Routes>
        <Route path='/' exact element={<ExerciseList />} />
        <Route path='/edit/:id' element={<EditExercise />} />
        <Route path='/create'element={<CreateExercise />} />
        <Route path='/user' element={<CreateUser />} />
        <Route path='/userlist' element={<UsersList />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
