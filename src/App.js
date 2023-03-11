import { Routes, Route } from 'react-router-dom';
import HomePage from './home/home';
import IndexPage from './indexPage/IndexPage';
import Shop from './shop/shop';
import SignInForm from './signIn/signInForm';
import PayPage from './payClass/payPage';
import StripeComp from './stripeClass/stripeComp';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}>
            <Route index element={<IndexPage></IndexPage>}></Route>
            <Route path='/shop' element={<Shop></Shop>}></Route>
            <Route path='/signIn' element={<SignInForm></SignInForm>}></Route>
            <Route path="/payPage" element={<PayPage></PayPage>}></Route>
            <Route path='/stripe' element={<StripeComp></StripeComp>}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
