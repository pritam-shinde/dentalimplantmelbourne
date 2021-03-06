import {createRoot} from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'animate.css';
import App from './App';
import './index.css';

const container = document.getElementById('root');

// Create a root.
const root = createRoot(container);

root.render(<BrowserRouter><App /></BrowserRouter>)