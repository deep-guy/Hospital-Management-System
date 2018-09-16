import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Appsearch from './Appsearch';
import Appregister from './Appregister';
import registerServiceWorker from './registerServiceWorker';
import SemanticForm from './components/patientSearch/SemanticForm';


ReactDOM.render(<Appregister />, document.getElementById('root'));
registerServiceWorker();
