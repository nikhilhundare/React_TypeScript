import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { WorldChampion } from '../types/worldChampions';
import {CHAMPION_API} from './../util/constants';

export interface WorldChampions {
  results: WorldChampion[];
}

const useWordChampionsService = () => {
  const [result, setResult] = useState<Service>({
    status: 'loading'
  });

  useEffect(() => {
    fetch(CHAMPION_API)
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response.MRData.StandingsTable.StandingsLists }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default useWordChampionsService;