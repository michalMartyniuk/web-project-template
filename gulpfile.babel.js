import { src, dest, watch, series, parallel } from 'gulp'
import sass from 'gulp-sass'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import nodemon from 'gulp-nodemon'
import { exec } from 'child_process'
import fs from 'fs'

function watcher() {
    watch('src/*\.js', js)
}
function insertScripts() {
    let webpack = `"webpack": "webpack"`
    let watch = `"webpack-watch": "webpack --watch"`
    fs.readdirSync('./')

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