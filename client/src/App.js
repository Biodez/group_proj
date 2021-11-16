import "./App.css";
import { Router } from "@reach/router";
import ClientRegister from "./components/ClientRegister";
import ClientLogin from "./components/ClientLogin";
import AdminSignIn from "./components/AdminSignIn";
import AdminSignUp from "./components/AdminSignUp";
import AdminDisplay from "./views/AdminDisplay";
import Main from "./views/Main";
import Update from "./views/Update";
import ProductEdit from "./views/ProductEdit";
import View from "./views/View";
import Detail from "./views/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <ClientRegister path="/" />
        <ClientLogin path="client/signin" />
        <AdminSignUp path="/signup" />
        <AdminSignIn path="/signin" />
        <AdminDisplay path="/display" />
        <Main path="/product" />
        <ProductEdit path="/home" />
        <Update path="/edit/:id" />
        <View path="/products" />
        <Detail path="/product/:id" />
      </Router>
    </div>
  );
}

export default App;
