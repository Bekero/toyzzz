
import { Route, Routes } from 'react-router-dom';
import { HomeApp } from './pages/home-app'
import { AppHeader } from './cmps/app-header';
import { AboutApp } from './pages/about-app'
import { ToyApp } from './pages/toy-app'
import { ToyEdit } from './pages/toy-edit'
import { ToyDetails } from './pages/toy-details.jsx'
import { ChartApp } from './pages/chart-app.jsx'
import { PricesByTypeChart } from './cmps/prices-by-type-chart'
import { Login } from './cmps/login'
import { InventoryStockChart } from './cmps/inventory-stock-chart'
import { SignUp } from './pages/sign-up.jsx'


function App() {

  return (
    <div className="main-layout">
      <AppHeader />
      <main>
        <Routes>
          <Route path='toy/edit/:id' element={<ToyEdit />} />
          <Route path='toy/edit' element={<ToyEdit />} />
          <Route path='toy/:id' element={<ToyDetails />} />
          <Route path='toy' element={<ToyApp />} />
          <Route path='about' element={<AboutApp />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='login' element={<Login />} />


          <Route path='chart' element={<ChartApp />} >
            <Route path='price-chart' element={<PricesByTypeChart />} />
            <Route path='stock-chart' element={<InventoryStockChart />} />
          </Route >


          <Route path='' element={<HomeApp />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;