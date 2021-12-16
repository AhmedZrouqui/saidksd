export default function delayImport(path){
    return Promise.all([
        path,
        new Promise(resolve => setTimeout(resolve, 1000))
    ]).then(([moduleExports]) => moduleExports)
}