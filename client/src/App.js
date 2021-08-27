import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faReact } from '@fortawesome/free-solid-svg-icons';
// import { faReact } from '@fortawesome/fontawesome-svg-core';
// import { faReact } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <div className='App'>
      <h4>
        <FontAwesomeIcon icon={faReact} />
        React File Upload
      </h4>
    </div>
  );
}

export default App;
