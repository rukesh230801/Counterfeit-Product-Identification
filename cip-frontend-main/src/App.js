import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Web3 from 'web3';
import FakeProdId from './FakeProdId.json';
import truffleContract from 'truffle-contract';
import { useState,useEffect, useCallback } from 'react';
import AppContext from './AppContext';
import { addAccount, addProduct, initweb3,getSupplier, getProduct } from './Web3Client';
import SupplierLanding from './components/SupplierLanding';
import ManufacturerLanding from './components/ManufacturerLanding';
import DistributorLanding from './components/DistributorLanding';
import RetailerLanding from './components/RetailerLanding';
import ProdDetails from './components/ProdDetails';
import CustomerLanding from './components/CustomerLanding';

function App() {
  
  const [userrole,setUserrole] = useState(null);
  const [account,setAccount] = useState(null);

  useEffect(() => {
  initweb3();
  // addProduct({name:"test",price:100,description:"test",curOwnerName:"test"},71827872);
  // getProduct(15).then(res => console.log(res));
  },[]);
  
  return (
    <AppContext.Provider value={{account,setAccount,userrole,setUserrole}}>
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path='/supplier/:id' element={<SupplierLanding/>} />
            <Route path='/manufacturer/:id' element={<ManufacturerLanding/>} />
            <Route path='/distributor/:id' element={<DistributorLanding/>} />
            <Route path='/retailer/:id' element={<RetailerLanding/>} />
            <Route path='/customer' element={<CustomerLanding/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  </AppContext.Provider>
  );
}

export default App;
