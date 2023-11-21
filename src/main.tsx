import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import { RouterList } from './router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterList />
	</React.StrictMode>
);
