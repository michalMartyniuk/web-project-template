import { watch, series } from 'gulp'
import nodemon from 'gulp-nodemon'
import { exec } from 'child_process'

function watcher() {
    watch('src/*\.js', js)
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