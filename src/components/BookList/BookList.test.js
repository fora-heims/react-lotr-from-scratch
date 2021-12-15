import { render } from '@testing-library/react';
import BookList from './BookList.js';

let b = ['as', 'a', 'crow'];

test('', () => {
  const container = render(<BookList books={b} />);
  expect(container).toMatchSnapshot();
});
