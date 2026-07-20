import { useEffect, useState } from "react";
import { GetStreamers } from "./Services/GetStreamers";
import { GetGoals } from "./Services/GetGoals";
import Streamer from "./Streamer";

function Home() {
    const [streamersData, setStreamersData] = useState([]);
    const [goalsData, setGoalsData] = useState([]);

    useEffect(function () {
        GetStreamers().then((data) => 
            {
                setStreamersData(data)
            }
        );
        GetGoals().then((data) => {
            setGoalsData(data);
        });
    }, []);

    return <div className="streamersPage">
        {
            streamersData.map((streamer) => {
                var goals = goalsData.filter((x) => x.twitch_name === streamer.twitch_name);

                return <Streamer goals={goals} streamer={streamer}/>
            })
        }
    
    </div>
}

export default Home;