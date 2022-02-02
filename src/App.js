import './global.styles.css';
import ImageSliderContextProvider from './context/imageContext';
import MainWrapper from './components/mainWrapper/MainWrapper';

function App() {
  return (
    <div className="App">
      <ImageSliderContextProvider>
        <MainWrapper />
      </ImageSliderContextProvider>
    </div>
  );
}

export default App;
