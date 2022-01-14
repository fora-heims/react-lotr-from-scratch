import { render } from '@testing-library/react';
import Booklist from './Booklist.js';

test('', () => {
  const container = render(<Booklist books={[]} />);
  expect(container).toMatchSnapshot();
});
