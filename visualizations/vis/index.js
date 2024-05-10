import React from "react";
 
import { AreaChart, LineChart ,PieChart,BarChart,Scatter} from "nr1";
 
import { Grid, GridItem } from "nr1";
 
const index = () => {
  return (
    <div className="heading">
          <h1>hiii everyone</h1>
        <AreaChart 
        accountId={4438259}
            query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI1OXxJTkZSQXxOQXw4MjIwNTUxNjQzODU5MTcxMTYx') TIMESERIES AUTO"
            fullWidth
            />
            <LineChart
        accountId={4438259}
            query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI1OXxJTkZSQXxOQXw4MjIwNTUxNjQzODU5MTcxMTYx') TIMESERIES AUTO"
            fullWidth
            />
             <PieChart
        accountId={4438259}
            query="SELECT average(transmitBytesPerSecond) AS `Transmit bytes per second`, average(receiveBytesPerSecond) AS `Receive bytes per second` FROM NetworkSample WHERE (entityGuid = 'NDQzODI1OXxJTkZSQXxOQXw4MjIwNTUxNjQzODU5MTcxMTYx') TIMESERIES AUTO"
            fullWidth
            />
            {/* <Scatter
        accountId={4438259}
        query="SELECT average(duration) FROM Transaction SINCE 1 week ago TIMESERIES AUTO"
        fullWidth
      /> */}
               
                
  
    </div>
  );
};
 
export default index;