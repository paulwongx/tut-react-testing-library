// Changed name from App.test.js (proper) to avoid running this test as it takes a long time

import React from 'react'
import {render, cleanup} from '@testing-library/react'
import App from './App'

 afterEach(cleanup)

 it('should take a snapshot', () => {
    const { asFragment } = render(<App />)

    expect(asFragment(<App />)).toMatchSnapshot()
});
