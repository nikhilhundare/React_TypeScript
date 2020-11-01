import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './../App';
import Home from './../components/Home';
import TableView from './../components/TableView';
// import { mount } from 'enzyme'; // Currently, there is no version of enzyme compatible with react 17.0.1

describe('App', ()=>{
  test('renders world champions list', () => {
    render(<App />);
    const titleElement = screen.getByText(/World Champions/i);
    expect(titleElement).toBeInTheDocument();
  });
  
  /**
   * Nikhil H :
   * There is no supported version of enzyme for React 17.0.1 version
   * Below commented code showcases the routing test cases using enzyme
   */
  
  /*test('default path should redirect to Home Page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  
  });

  test('default path should redirect to Table View Page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/seasons/:seasonName/:driverCode' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(TableView)).toHaveLength(1);
  
  });*/
});

