require('electron')
    .contextBridge
    .exposeInMainWorld('electron', {basis: require('basis')})