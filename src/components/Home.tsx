import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import useWordChampionsService from '../services/useWordChampionsService';
import Loader from './Loader';
import ListItem from './ListItem';
import {HOME_TITLE, API_ERROR} from './../util/constants';


const Home: React.FC<{}> = () => {
    const service = useWordChampionsService();
    
    return (
      <>
        <div className='home'>
        <h1 className="Page-header">{HOME_TITLE}</h1>
        {service.status === 'loading' && (
          <div className="loader-container">
            <Loader />
          </div>
        )}
        <Container>
            <Row>
            {service.status === 'loaded' &&
            service.payload.StandingsLists.map((champion) => {
                return (
                        <Col xs={6} md={4}>
                            <ListItem data={champion} />
                        </Col>
                     )
            })}
            </Row>
        </Container>
        {service.status === 'error' && (
            <div>{API_ERROR}</div>
        )}
      </div>
      </>
    );
  };
  
  export default Home;