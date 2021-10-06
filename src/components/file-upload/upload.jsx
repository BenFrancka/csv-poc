import React from 'react';
import Papa from 'papaparse';

export default function Upload() {
  return (
    <div className="App">
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(event) => {
          const files = event.target.files;
          console.log(files);
          if (files) {
            console.log(files[0]);
            Papa.parse(files[0], {
              delimiter: '',
              header: true,
              complete(results) {
                console.log('Finished:', results.data);
              },
            });
          }
        }}
      />
    </div>
  );
}
