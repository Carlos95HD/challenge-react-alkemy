
import { mount } from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => <span>Redirect to login</span>
}));

describe('Pruebas en rutas privadas', () => {

  test('Deberá mostrar la ruta privada', () => {

    const wrapper = mount(
        <MemoryRouter initialEntries={['/search']}>
          <PrivateRoute token={"asdzxd21asd"} user={'test@test.com'}>
            <h1>pivate-route</h1>
          </PrivateRoute>
        </MemoryRouter>
    )

    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.text().trim()).toBe('pivate-route');
  })

  test('Deberá redirigir al login', () => {

    const wrapper = mount(
        <MemoryRouter initialEntries={['/search']}>
          <PrivateRoute token={""} user={'test@test.com'}>
            <h1>pivate-route</h1>
          </PrivateRoute>
        </MemoryRouter>
    )

    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.text().trim()).toBe('Redirect to login');
  })
});