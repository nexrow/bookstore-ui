import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookListPage from './pages/bookListPage'
import HomePage from './pages/homePage'

const rootElement = document.getElementById('root')

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/books' element={<BookListPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
  rootElement
)