import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App';
import './index.css';

// SSG entry. vite-react-ssg owns the router (createBrowserRouter on the client,
// memory router during the static build) and hydrates the pre-rendered HTML.
export const createRoot = ViteReactSSG({ routes });
