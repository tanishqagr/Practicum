import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import './DashboardTable.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const DashboardTable = () => {
  const layouts = {
    lg: [
      { i: 'a', x: 0, y: 0, w: 1, h: 2 },
      { i: 'b', x: 1, y: 0, w: 3, h: 2 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 }
    ]
  };

  const sampleData = [
    { vendor: 'Faison Construction Inc', details: '300078', status: 'Active' },
    { vendor: 'Oregon Public Broadcasting', details: '104122', status: 'Inactive' },
    { vendor: 'Metro Machinery Rigging Inc', details: '100078', status: 'Active' }
  ];

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      <div key="a" className="box">
        Vendor Name
        <ul>
          {sampleData.map(data => (
            <li key={data.vendor}>{data.vendor}</li>
          ))}
        </ul>
      </div>
      <div key="b" className="box">
        Contract Details
        <ul>
          {sampleData.map(data => (
            <li key={data.details}>{data.details}</li>
          ))}
        </ul>
      </div>
      <div key="c" className="box">
        Status
        <ul>
          {sampleData.map(data => (
            <li key={data.status}>{data.status}</li>
          ))}
        </ul>
      </div>
    </ResponsiveGridLayout>
  );
}

export default DashboardTable;
