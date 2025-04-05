// 1 + 2 + 3 + ... + (n-2) + (n-1) + m
function fatorial(n){
    return new Promise((resolve, reject) => {
    if(n >= 1){
        let ac = 1
        for(let i = 2; i <= n; i++)
        ac *= i
        resolve(ac)
    } 
    else
        reject('Somente positivos')
    })
}

const chamadaComAsyncAwait = async () => {
    try{
        const f1 = await fatorial(5)
        console.log(f1)
    }
    catch(err){
        console.log(erro)
    }
    try{
        const f2 = await (fatorial(-1))
        console.log(f2)
    }
    catch(err){
        console.log(err)
    }
}

chamadaComAsyncAwait()
console.log('outras coisas...')

// async function fatorial(n){
//     let ac = 1
//     for(let i = 2; i <= n; i++)
//         ac *= i
//     return ac
// }

// const r1 = fatorial(5)
// console.log(r1)

// fatorial(5).then(f => console.log(f))



// const somaDemorada = (n) => {
//     const p = new Promise((resolve, reject) => {
//         if(n >= 1){
//             let ac = 0
//             for(let i = 1; i <= n; i++)
//                 ac += 1
//             resolve(ac)
//         }
//         else
//             reject('Somente valores positivos')
//     })
//     return p
//}


// const res = somaDemorada(10)
// //then
// res

// .then((soma) => console.log(`Soma: ${soma}`
//     p2.then(() => {})
// ))
// .catch((err) => console.log(`Erro: ${err}`))
// console.log('outras coisas...')
// //catch






//const somaDemorada = (n) => {
//    let ac = 0
//    for(let i = 1; i <= n; i++)
//        ac += 1
//    return ac
// }

///processamento bloqueante ou síncrono
//const res = somaDemorada(10)
//console.log(res)
//console.log("qualquer outra coisa que não depende do res")