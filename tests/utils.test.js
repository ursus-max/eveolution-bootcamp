import { getRectanglePerimeter } from '../js/rectangle';

test ('get perimeter correct', () => {
    const perimeter = getRectanglePerimeter(5, 5);
    expect(perimeter).toBe(20);
});

import { getRectangleArea } from '../js/rectangle';
test ('get area of the rectangle correct', () =>{
    const area = getRectangleArea (5, 5)
    expect(area).toBe(25)
});

import { getRectangleInfo } from '../js/rectangle';

test ('get rectangle info correct', () => {
    const info = getRectangleInfo (5, 5);
    expect(info).toBe('The perimeter of a rectangle is 20 and the area is 25')
});