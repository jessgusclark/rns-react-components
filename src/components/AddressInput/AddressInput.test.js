import React from 'react';
import ReactDOM from 'react-dom';

import AddressInput from './AddressInput';

describe('tests the AddressInput', ()=>{ 
    it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddressInput />, div);
    ReactDOM.unmountComponentAtNode(div);
    });
});