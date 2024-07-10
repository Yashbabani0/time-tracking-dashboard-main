import React from 'react';
import data from '../../data.json';

export default function Databox() {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h3>{item.title}</h3>
          <div>
            <h4>Daily</h4>
            <p>Current: {item.timeframes.daily.current} hrs</p>
            <p>Previous: {item.timeframes.daily.previous} hrs</p>
          </div>
          <div>
            <h4>Weekly</h4>
            <p>Current: {item.timeframes.weekly.current} hrs</p>
            <p>Previous: {item.timeframes.weekly.previous} hrs</p>
          </div>
          <div>
            <h4>Monthly</h4>
            <p>Current: {item.timeframes.monthly.current} hrs</p>
            <p>Previous: {item.timeframes.monthly.previous} hrs</p>
          </div>
        </div>
      ))}
    </div>
  );
}
