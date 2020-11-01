import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import {  RootObject } from '../types/worldChampions';
import {CHAMPION_API} from './../util/constants';

const useWordChampionsService = () => {
  const [result, setResult] = useState<Service<RootObject>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch(CHAMPION_API)
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response.MRData.StandingsTable }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default useWordChampionsService;