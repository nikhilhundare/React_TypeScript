import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import {ERGAST_API} from './../util/constants';

const useSeasonsService = (seasonName: any) => {
  const [result, setResult] = useState<Service>({
    status: 'loading'
  });
  const SEASONS_API = `${ERGAST_API}${seasonName}/results/1.json`;

  useEffect(() => {
    fetch(SEASONS_API)
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response.MRData.RaceTable.Races }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default useSeasonsService;