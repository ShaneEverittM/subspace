const {contextBridge} = require('electron')

console.log("Running preload script")

contextBridge.exposeInMainWorld('electron', {basis: require('basis')})