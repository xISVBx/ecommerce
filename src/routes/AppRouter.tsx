import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SlideNavBarRouter from './SlideNavBarRouter';
import ShowCasePage from '../pages/showcase/ShowcasePage';

const AppRouter: React.FunctionComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/pepe1' element={<div className='text-white'>pepe 1</div>} />
                <Route path='/' element={<SlideNavBarRouter />}>
                    <Route path='/' element={<ShowCasePage />} />
                    <Route path='/pepe3' element={<div className='text-white'>pepe 3</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;