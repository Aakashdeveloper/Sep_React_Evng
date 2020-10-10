import React from 'react';
import Footer from '../component/Footer';
import {create} from 'react-test-renderer';
import BaseButton from '../component/BaseButton';


describe('SnapShot Footer Test',() => {
    test('Testing Footer',() => {
        let tree = create(<Footer/>)
        expect(tree.toJSON()).toMatchSnapshot()
    });

    test("it shows the expected text when clicked", () => {
      const component = create(<BaseButton/>);
      const instance = component.root;
      const button = instance.findByType("button");
      button.props.onClick();
      expect(button.props.children).toBe("Some Thing");
    });
})
