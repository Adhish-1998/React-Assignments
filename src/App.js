import './App.css';
import Logo from './Component/Logo';
import SearchButton from './Component/SearchButton';
import LuckyButton from './Component/LuckyButton';
import SearchBox from './Component/SearchBox';
import LanguageNote from './Component/LanguageNote';

function App() {
  return (
    <div className="App">
      <Logo />
      <SearchButton />
      <LuckyButton />
      <SearchBox />
      <LanguageNote />
    </div>
  );
}

export default App;
