import {render, screen} from '@testing-library/react';
import PageNotFound from './PageNotFound.tsx';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import {expect} from 'vitest';
import Page from '../../common/types/page.type.ts';

test('Wrong URL path results in 404 Not Found page', () => {
  const router = createMemoryRouter(
    [
      {
        path: '/',
        errorElement: <PageNotFound />,
        children: Object.values(Page),
      },
    ],
    {
      initialEntries: ['/wrong_path'],
    }
  );
  render(<RouterProvider router={router} />);
  const errorMessage = screen.getByTestId('errorMessage');
  expect(errorMessage.textContent).toContain(
    'No route matches URL "/wrong_path"'
  );
});
