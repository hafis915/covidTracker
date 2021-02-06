import React from 'react'
import {
    VictoryLine, 
    VictoryChart,
    VictoryLabel,
    VictoryAxis,
    VictoryTheme,
    VictoryContainer,
    Curve
} from 'victory'
import { 
    IonContent, 
  } from '@ionic/react';

  const Makassar = [
    { x: 5, y: 200 },
    { x: 6, y: 250 },
    { x: 7, y: 200 },
    { x: 8, y: 320 },
    { x: 9, y: 100 }
]
const Chart : React.FC = () => {

    const handleClick = () => {
        console.log('ehy')
    }


    return (
        <div
      className= "cart"
      > 
        <VictoryChart 
        height={400} 
        width={400}
        domainPadding= {{x:20, y:50}}>
            <VictoryLabel 
            inline
            text="Makassar" 
            x={225} 
            y={30} 
            className= "label"
            textAnchor="middle"
            style = {{
                fill:"#fecd1a",
                fontSize:30,
                fontWeight:'bold'

            }}

            />
            <VictoryAxis
            label = "Month"
            style= {{
                axis: {stroke: '#fecd1a',width:20},
                axisLabel: {fontSize: 20, padding: 30,stroke:'#fecd1a',margin:20},
                ticks: {stroke: "grey", size: 10},
                tickLabels: {fontSize: 15, padding: 5, stroke:'#fecd1a'}
            }}
            
            />

            <VictoryAxis
            dependentAxis
            style= {{
                axis: {stroke: '#fecd1a',width:20},
                axisLabel: {fontSize: 20, padding: 30},
                ticks: {stroke: "grey", size: 10},
                tickLabels: {fontSize: 15, padding: 5, stroke:'#fecd1a'}
            }}

            />
            <VictoryLine
            style={{
                data: { stroke: "#fecd1a" },
                parent: { border: "4px solid #ccc"}
            }}
            data={Makassar}
            animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
            }}
            // containerComponent={<VictoryContainer responsive={false}/>}
            // dataComponent={<Curve events={{ onClick: handleClick }}/>}
            />
        </VictoryChart>

        </div>
    )
}


export default Chart