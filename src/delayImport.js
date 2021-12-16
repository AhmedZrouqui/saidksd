export default function delayImport(path){
    return Promise.all([
        import(path),
        new Promise(resolve => setTimeout(resolve, 2000))
    ]).then(([moduleExports]) => moduleExports)
}