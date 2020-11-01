import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';
import ListItem from '../components/ListItem';
import useWordChampionsService from '../services/useWordChampionsService';

var StandingsList = {
  "season": "2005",
  "round": "19",
  "DriverStandings": [{
    "position": "1",
    "positionText": "1",
    "points": "133",
    "wins": "7",
    "Driver": {
      "driverId": "alonso",
      "permanentNumber": "14",
      "code": "ALO",
      "url": "http://en.wikipedia.org/wiki/Fernando_Alonso",
      "givenName": "Fernando",
      "familyName": "Alonso",
      "dateOfBirth": "1981-07-29",
      "nationality": "Spanish"
    },
    "Constructors": [{
      "constructorId": "renault",
      "url": "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
      "name": "Renault",
      "nationality": "French"
    }]
  }]
};

describe('Home', () => {
  test('renders world champions title', () => {
    render(<Home />);
    const titleElement = screen.getByText(/World Champions/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('check driverStanding object', () => {
    expect(StandingsList.DriverStandings).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          "Driver" : {
            "code": "ALO"
          }
        })
      ])
    )
  });

  test('renders champions data', () => {
    render(<ListItem data={StandingsList} />);
    const titleElement = screen.getByText(/Fernando Alonso/i);
    expect(titleElement).toBeInTheDocument();
  });

});