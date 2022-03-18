import React from 'react';
import "../../../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from "react-vis";
import { NextPage } from "next";

const Charts: NextPage = () => {
    const data = [
        { x: 0, y: 68 },
        { x: 1, y: 75 },
        { x: 2, y: 70 },
        { x: 3, y: 54 },
        { x: 4, y: 55 },
        { x: 5, y: 42 },
        { x: 6, y: 42 },
        { x: 7, y: 44 },
        { x: 8, y: 43 },
        { x: 9, y: 46 },
        { x: 10, y: 38 },
        { x: 11, y: 38 },
        { x: 12, y: 24 },
        { x: 13, y: 23 },
        { x: 14, y: 16 },
        { x: 15, y: 18 },
        { x: 16, y: 13 },
        { x: 17, y: 19 },
    ];

    const data2 = [
        { x: 0, y: 19 },
        { x: 1, y: 17 },
        { x: 2, y: 20 },
        { x: 3, y: 23 },
        { x: 4, y: 31 },
        { x: 5, y: 33 },
        { x: 6, y: 31 },
        { x: 7, y: 35 },
        { x: 8, y: 39 },
        { x: 9, y: 40 },
        { x: 10, y: 46 },
        { x: 11, y: 47 },
        { x: 12, y: 51 },
        { x: 13, y: 52 },
        { x: 14, y: 55 },
        { x: 15, y: 53 },
        { x: 16, y: 58 },
        { x: 17, y: 60 },
    ];

    const data3 = [
        { x: 0, y: 14 },
        { x: 1, y: 8 },
        { x: 2, y: 7 },
        { x: 3, y: 9 },
        { x: 4, y: 10 },
        { x: 5, y: 14 },
        { x: 6, y: 18 },
        { x: 7, y: 20 },
        { x: 8, y: 16 },
        { x: 9, y: 17 },
        { x: 10, y: 1 },
        { x: 11, y: 7 },
        { x: 12, y: 9 },
        { x: 13, y: 15 },
        { x: 14, y: 18 },
        { x: 15, y: 16 },
        { x: 16, y: 22 },
        { x: 17, y: 29 },
    ];

    return (
        <div style={{ marginTop: '15px' }}>
            <XYPlot height={300} width={470}>
                <VerticalGridLines/>
                <HorizontalGridLines />
                <XAxis/>
                <YAxis/>
                <LineSeries data={data} color='red'/>
                <LineSeries data={data2} color='blue'/>
                <LineSeries data={data3} color='green'/>
            </XYPlot>
        </div>
    )
}

export default Charts