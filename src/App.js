import { HeaderComponent } from './components/Header/HeaderComponent';
import { Home } from './views/Home/Home';
import { FooterComponent } from './components/Footer/FooterComponent';
import './App.scss';

function App() {
  return (
    <div className="app__wrapper">
      <HeaderComponent />
      <Home />
      <FooterComponent />
    </div>
  );
}

export default App;
