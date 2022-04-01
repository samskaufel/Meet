import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const genres = ["React", "JavaScript", "Node.js", "jQuery", "AngularJS"];

const EventGenre = ({ events }) => { 
  const [data, setData] = useState([]);
  useEffect(() => {
    

      const newData = genres.map((genre) => {
        const value = events.filter(({ summary }) =>
          summary.includes(genre)
        ).length;
        return { name: genre, value };
      }).filter(d => d.value > 0);
      
  
    setData(newData);
  }, [events]);

  const colors = ["#8884d8", "#8884d8", "#8884d8", "#8884d8", "#8884d8"];

  return (
    <ResponsiveContainer height={400}>
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
