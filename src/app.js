import fs from 'fs';
import { getPartOfString, insertContent } from '../src/funcs';

let newScripts = `"scripts": {
    "elotest": "echo \"Error: no test specified\" && exit 1",
    "siema": "webpack",
    "yoooooooooooooo": "webpack --watch",
    "elotest": "echo \"Error: no test specified\" && exit 1",
    "siema": "webpack",
    "yoooooooooooooo": "webpack --watch"
  `
let packageJson = fs.readFileSync('package.json').toString()
let { start, end } = getPartOfString(packageJson, `"scripts": {`, `}`)

insertContent(packageJson, start, end, newScripts)
