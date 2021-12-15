import { render } from '@testing-library/react';
import Booklist from './Booklist.js';

let b = ['as', 'a', 'crow'];

test('', () => {
  const container = render(<Booklist books={b} />);
  expect(container).toMatchSnapshot();
});
