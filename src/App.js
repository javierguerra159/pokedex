import "./App.css"
import { HashRouter, Routes, Route } from 'react-router-dom'
import Pokedex from './components/Pokedex'

import PokemonInput from './components/PokemonInput'
 import ProtectedRoutes from './components/ProtectedRoutes'
import PokemonDetail from "./components/PokemonDetail"

function App() {





  return (
    
      
    <HashRouter>
      <Routes>
        
          <Route path='/' element={<PokemonInput />} />

          <Route element={<ProtectedRoutes />} >
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<PokemonDetail />} />
          </Route>

        
      </Routes>
    </HashRouter>
    
  )
}

export default App
/*

https://docs.google.com/document/d/16By_daZazY15dsegi0fAknRqVuRgy__XefEnH4Ypj6k/edit
https://classroom.google.com/u/0/c/NTA5OTcwNTEwMzA3/a/NTIyMTY2ODIzMTgw/details
https://campus.open-bootcamp.com/cursos/6/leccion/238
https://academlo.notion.site/add77611b31f48878357a5b119761aa5?v=7f8800ad8c404f43bf537d0104dc15b3
https://www.figma.com/file/6p1Py3dUDs9dRDgSX3iZGE/React?node-id=22%3A477
https://adventjs.dev/challenges/25
https://docs.google.com/spreadsheets/d/1avzQ1ItB3Ft9InnJQC_k_p3mlAI_PB0COx3IauPUCQ8/edit#gid=0
https://ttsdemo.com/
*/ 