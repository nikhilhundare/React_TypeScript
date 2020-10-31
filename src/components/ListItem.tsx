import React from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import Alonso from './../assets/ALO.jpg';
import Kimi from './../assets/RAI.jpg';
import JButton from './../assets/BUT.jpg';
import Hamilton from './../assets/HAM.jpg';
import Vet from './../assets/VET.jpg';

const ListItem=(payload : any)=> {

  const driverData = payload.data.DriverStandings[0].Driver;
  const seasonName = payload.data.season;
  let driverImage = '';
  switch(driverData.code){
    case 'ALO' : driverImage = Alonso; break;
    case 'RAI' : driverImage = Kimi; break;
    case 'BUT' : driverImage = JButton; break;
    case 'HAM' : driverImage = Hamilton; break;
    case 'VET' : driverImage = Vet; break;
    default : driverImage = ''; break;
  }
    return (
        <Card style={{  width: '15rem', margin:'8px' }}>
        <Image src={driverImage} style={{  width: '100%', height:'200px'}} rounded />
        <Card.Body className="Card-body">
        <Card.Title>{driverData.givenName} {driverData.familyName}</Card.Title>
          <Card.Text>
            {driverData.nationality}
          </Card.Text>
          <Button href={`/seasons/${seasonName}/${driverData.code}`} variant="dark">{seasonName}</Button>
        </Card.Body>
      </Card>
    );
  }
export default ListItem;