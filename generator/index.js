/* eslint-disable @typescript-eslint/no-var-requires */
const action = require('./action');
const reducer = require('./reducer');

const type = process.argv[2];
const name = process.argv[3];
const force = process.argv[4];
const skip = process.argv[5];

const schema = {
  action: () => action(name, force, skip),
  reducer: () => reducer(name, force, skip),
};

if (type in schema) {
  schema[type]();
} else {
  console.log(`"${type}" - type does not exists in templates`);
}