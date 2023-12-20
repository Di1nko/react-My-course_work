import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

function Myplyer() {
    return <div style={{backgroundColor: "rgb(244, 198, 255)"}}>
      <Container>
        <h2>Видео о достопримечательностях Дальнего Востока</h2>
      <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/1dmecEjjAlg?si=cxPAgYmCYKvSABRS" title="YouTube video" allowfullscreen></iframe>
      </div> 
      </Container>
    </div>
  };
 
export default Myplyer;