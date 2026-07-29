import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Carousel from 'react-bootstrap/Carousel';
import NumberFlow from '@number-flow/react'
import { GetStats } from "./Services/GetStats";

function Cagnotte(props) {
    let params = useParams();
    const [currentAmount, setCurrentAmount] = useState(0);

    useEffect(function () {
        GetStats(params.pseudo).then((data) => {
                setCurrentAmount(data[0].total_raised)
            });
        
        
        let timer = setInterval(() => {
            GetStats(params.pseudo).then((data) => {
                    setCurrentAmount(data[0].total_raised)
                });
        }, 5000);

        return () => {
            clearInterval(timer);
        }
    }, []);


    return <div className={props.background ? "tracker" : "tracker nobackground"}>
        {props.slide === true ? <Carousel wrap={true} indicators={false} controls={false} interval={5000}>
            <Carousel.Item>
                <div className="trackerStreamer">
                    {props.background ? 
                        <img src="logoWhite.svg" alt="MFF" className="mffLogo" height={80}/> :
                        <img src="logoMFF_2026_full.svg" alt="MFF" className="mffLogo" height={80}/>
                    }
                    <p className="trackerStreamerAmount"><NumberFlow value={currentAmount}/> €</p>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className="trackerStreamer utopia">
                    <p className="trackerStreamerName">Au profit de</p>
                    {props.background ? 
                        <img src="utopiaWhite.png" alt="Logo Utopia56" width={150} className="utopiaLogo"/> :
                        <img src="utopiaBlack.png" alt="Logo Utopia56" width={150} className="utopiaLogo"/>
                    }
                </div>
            </Carousel.Item>
            
        </Carousel> :<Carousel wrap={true} indicators={false} controls={false}>
            <Carousel.Item>
                <div className="trackerStreamer">
                    {props.background ? 
                        <img src="logoWhite.svg" alt="MFF" className="mffLogo" height={80}/> :
                        <img src="logoMFF_2026_full.svg" alt="MFF" className="mffLogo" height={80}/>
                    }
                    <p className="trackerStreamerAmount"><NumberFlow value={currentAmount}/> €</p>
                </div>
            </Carousel.Item>
            
        </Carousel>
        }
    </div>;
}

export default Cagnotte;