import {Provider} from 'react-redux'
const store = React.lazy(() => {import('./store')});
import Window from './Components/Window/Window';
import Selector from './Components/Selector';


import './App.css';
function App() {
  return (
    <Window></Window>,
    <Selector></Selector>
  );
}

export default App;
