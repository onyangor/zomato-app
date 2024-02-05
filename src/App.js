import './App.css';
import {Route} from "react-router-dom";
import Home from './component/Home/Home';
import ListingApi from './component/Listing/ListingApi';
import Details from './component/Detail/Details'
import {PlaceOrder} from './component/Booking/PlaceOrder';
import Register from './component/auth/Register';
import Login from './component/auth/Login';
import { ViewBooking } from './component/Booking/ViewBooking';
function App() {
  return (
    <div className='App'>
      <Route exact path ="/" component={Home}/>
      <Route exact path="/listing/:mealId" component={ListingApi}/>
      <Route exact path="/details" component={Details}/>
      <Route exact path="/placeOrder/:restName" component={PlaceOrder}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/viewBooking" component={ViewBooking}/>
      

    </div>
  );
}

export default App;

