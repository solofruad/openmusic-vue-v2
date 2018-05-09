const msToMm = {}

function convertMstoMM (ms) {
    const min = Math.floor(ms / 60000)
    const seg = (( ms % 60000 / 1000 ).toFixed(0))

    return `${min}:${seg}`
}

msToMm.install = function (Vue) {
    Vue.filter('ms-to-mm', (val)=>{
        return convertMstoMM(val)
        //const min = Math.floor(val / 60000)
        //const seg = (( val % 60000 / 1000 ).toFixed(0))

        //return `${min}:${seg}`
    })  
}

export default msToMm