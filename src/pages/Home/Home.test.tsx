import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import App from '../../App.tsx';
import Page from '../../common/types/page.type.ts';
import userEvent from '@testing-library/user-event';

test('My Work button redirects to /projects page', async () => {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <App />,
      children: Object.values(Page),
    },
  ]);

  render(<RouterProvider router={router} />);

  const myWorkButton = screen.getByRole('button', {name: /my work/i});
  await userEvent.click(myWorkButton);
  expect(screen.getByTestId(/projects/i)).toBeInTheDocument();
});

test('Learn More button redirects to /about page', async () => {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <App />,
      children: Object.values(Page),
    },
  ]);

  render(<RouterProvider router={router} />);

  const learnMoreButton = screen.getByRole('button', {name: /learn more/i});
  await userEvent.click(learnMoreButton);
  expect(screen.getByTestId(/about/i)).toBeInTheDocument();
});
