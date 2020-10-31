import React from 'react';
import { useParams } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {
  TABLE_TITLE,
  TABLE_COLUMN_1,
  TABLE_COLUMN_2,
  TABLE_COLUMN_3,
  TABLE_COLUMN_4,
  CHAMPION_POINTS,
  API_ERROR
} from './../util/constants';
import useSeasonsService from '../services/useSeasonsService';
import Loader from './Loader';

const TableView: React.FC<{}> = () => {
  const {seasonName, driverCode } = useParams<{ seasonName: string, driverCode: string }>();
  const service : any = useSeasonsService(seasonName);
  let winningPoints: number;
  let winningRow: boolean;
  if(service.status === 'loaded'){
    winningPoints = 0;
    winningRow = false;
  }

  return (
    <>
      <div className='home'>
      <h1 className="Page-header">{TABLE_TITLE} {seasonName}</h1>
      {service.status === 'loading' && (
        <div className="loader-container">
          <Loader />
        </div>
      )}
      <Table className="Table" striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>{TABLE_COLUMN_1}</th>
            <th>{TABLE_COLUMN_2}</th>
            <th>{TABLE_COLUMN_3}</th>
            <th>{TABLE_COLUMN_4}</th>
          </tr>
        </thead>
        <tbody>
          {service.status === 'loaded' &&
          service.payload.map((seasonData: any) => {
              const winnerData = seasonData.Results[0].Driver;
              const teamName = seasonData.Results[0].Constructor.name;
              
              const highlighted_row =  <tr style={{  backgroundColor: 'black'}}>
              <td>{seasonData.round}</td>
              <td>{seasonData.raceName}</td>
              <td>{winnerData.givenName} {winnerData.familyName}</td>
              <td>{teamName}</td>
              </tr>;
               
               const normal_row = <tr>
               <td>{seasonData.round}</td>
               <td>{seasonData.raceName}</td>
               <td>{winnerData.givenName} {winnerData.familyName}</td>
               <td>{teamName}</td>
             </tr>; 

              if(winnerData.code === driverCode){
                winningPoints +=  parseInt(seasonData.Results[0].points);
                if(winningPoints >= CHAMPION_POINTS && !winningRow){
                  winningRow = true;
                  winningPoints = 0;
                  return highlighted_row;
                }
                return normal_row
              }else{
                return normal_row
              }
              
              
          })}
        </tbody>
      </Table>  
      {service.status === 'error' && (
          <div>{API_ERROR}</div>
      )}
    </div>
    </>
  );
  return (
    <div className='home'>
      <h1>Welcome to Table View</h1>
    </div>
  );
  }
export default TableView;