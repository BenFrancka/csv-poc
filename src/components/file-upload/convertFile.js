import csvToJson from 'convert-csv-to-json';


// const input = example;
// const output = 'example.json';

// const converteredFile = csvToJson.generateJsonFileFromCsv(input, output);

// console.log(converteredFile);

export const convertFile = (csvFile, jsonFile) => {
  const convertedFile = csvToJson.generateJsonFileFromCsv(csvFile, jsonFile);

  return convertedFile;
};
