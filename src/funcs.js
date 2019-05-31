import fs from 'fs'

function insertContent (srcText, start, end, text) {
    console.log(srcText.slice(0, start) + text + srcText.slice(end))
}
const getPartOfString = (text, startPattern, endPattern) => {
    let startPosition = text.search(startPattern)
    let endPosition = startPosition + text.slice(startPosition).search(endPattern)
    return {
        start: startPosition,
        end: endPosition,
        result: text.slice(startPosition, endPosition)
    }
}    

const updatedScripts = (scripts) => {
    const exists = (str) => scripts.search(str) > -1
    let updated
    if (!exists("webpack")) {
        updated = scripts + `,\n"webpack": "webpack"`
    }
    if (!exists("webpack-watch")) {
        updated = scripts + `,\n"webpack-watch": "webpack --watch"`
    }
    console.log(scripts[-1])
}

const getPositions = (regPattern, text) => {
    let arr
    let indexes = []
    while ((arr = regPattern.exec(text)) !== null) {
        indexes.push(arr.index)
    }
    return indexes
}

export { insertContent, getPartOfString, updatedScripts, getPositions }