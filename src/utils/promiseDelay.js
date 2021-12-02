export default function delayPage(page){
    return Promise.all([page, 
    new Promise(resolve => setTimeout(resolve, 1000))])
    .then(([moduleExports]) => moduleExports);
}