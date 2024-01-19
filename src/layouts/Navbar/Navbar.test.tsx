import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createMemoryRouter, RouterProvider} from 'react-router-dom';
import Page from '../../common/types/page.type.ts';
import App from '../../App.tsx';

test('Clicking Navbar Link renders correct page component', async () => {
  const pages = Object.values(Page);
  const randomPage = pages[Math.floor(Math.random() * pages.length)];

  const router = createMemoryRouter([
    {
      path: '/',
      element: <App />,
      children: Object.values(Page),
    },
  ]);

  render(<RouterProvider router={router} />);

  const navbarLink = screen.getByRole('link', {name: randomPage.name});
  await userEvent.click(navbarLink);

  const renderedPageContainer = screen.getByTestId(randomPage.name);
  expect(renderedPageContainer).toBeInTheDocument();
});
