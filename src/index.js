import React from 'react';
import ReactDOM from 'react-dom';
import { TodoApp } from './components/08-useReducer/TodoApp';
// import { Padre } from './components/07-tarea-memo/Padre';
// import { MemoHook } from './components/06-Memos/MemoHook';
// import { Memorize } from './components/06-Memos/Memorize';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HookApp } from './HookApp';

const divRoot = document.getElementById('root');
ReactDOM.render(<TodoApp />, divRoot);
