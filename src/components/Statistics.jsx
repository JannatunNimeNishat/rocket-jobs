import React from 'react';
import { useLoaderData } from 'react-router-dom';
//
import { PureComponent } from "react";
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ZAxis
} from "recharts";
const Statistics = () => {
    const assignmentMarks = useLoaderData();
    const { assignment_Number, total_mark, acquire_mark } = assignmentMarks;
    console.log(assignmentMarks);

    return (
        <>
            <div className=' bg-[#D9D9D9] '>
                <h1 className='pt-16 pb-28 text-center text-xl font-bold'>Statistics</h1>
            </div>
            <div>
                <ResponsiveContainer width="100%" height={400}>
                    <ScatterChart
                        margin={{
                            top: 40,
                            right: 40,
                            bottom: 20,
                            left: 40
                        }}
                    >
                        <CartesianGrid />
                        <XAxis dataKey="assignment_Number" name=' ' />
                        <YAxis type="number" dataKey="acquire_mark"  />
                        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                        <Scatter name="A school" data={assignmentMarks} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
            </div>

        </>
    );
};

export default Statistics;