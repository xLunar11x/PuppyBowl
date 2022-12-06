import { createRoot } from 'react-dom/client'
import React from 'react';
import { useState } from 'react';
import { Main } from './components/Main.js'




const appElement = document.querySelector('#app')
const root = createRoot(appElement)
root.render(<Main />);