import { src, dest, watch, series, parallel } from 'gulp'
import sass from 'gulp-sass'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import nodemon from 'gulp-nodemon'
import { exec } from 'child_process'
import fs from 'fs';
import { getPartOfString, insertContent } from '../src/funcs';

function watcher() {
    watch('src/*\.js', js)
}
function insertScripts() {
    let newScripts = `"scripts": {
        "webpack": "webpack",
        "webpack-watch: "webpack --watch"
      `
    let packageJson = fs.readFileSync('package.json').toString()
    let { start, end } = getPartOfString(packageJson, `"scripts": {`, `}`)
    let updatedContent = insertContent(packageJson, start, end, newScripts)
    fs.writeFileSync("package.json", updatedContent)

}
function initNodemon(done) {
    nodemon({ script: "build/build.js" })
    done()
}
function webpackWatch(done) {
    exec('npm run webpack-watch', (err, output) => {
        if (err) console.log(err)
        console.log(output)
    })
    done()
}
export default series(webpackWatch, initNodemon)