import React from 'react';
import Footer from '../components/Footer';
import {create} from 'react-test-renderer';

describe('SnapShot Footer Test',() => {
    test('Testing Footer',() => {
        let tree = create(<Footer/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})