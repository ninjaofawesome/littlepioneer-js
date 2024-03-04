import { screen } from '@testing-library/dom';
import {AvatarComponent} from "./Avatar";

describe('avatars', () => {
    test('it should return an element', ()=> {
       const avatar= new AvatarComponent('hello world');
       const bodyEl = document.querySelector('body');
       bodyEl!.appendChild(avatar);

        expect(screen.findByText('avatar-component')).toBeTruthy();
    })
});