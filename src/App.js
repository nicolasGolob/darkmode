import './App.css';
import Content from './components/Content';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider> 
        <Content/>
      </ThemeContextProvider>
    </div>
  );
}
export default App;
