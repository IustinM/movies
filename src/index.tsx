import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom';

const client = new QueryClient();



ReactDOM.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
    <App />
    <ReactQueryDevtools initialIsOpen={false}/>
    
    </BrowserRouter>
  </QueryClientProvider>,
 
  document.getElementById('root')
);

