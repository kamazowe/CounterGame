// {'Counter1':{
//     id:'Counter1',
//     name:'Counter Yellow x1',
//     rise:1,
//     total:0},
// 'Counter2':{
//     id:'Counter2',
//     name:'Counter Yellow x2',
//     rise:2,
//     total:0},
// 'Counter3':{id:'Counter3',
//     name:'Counter Yellow x3',
//     rise:3,
//     total:0}
// }
// in: Map >> byId

export function selectorCounterRed (countersRMap){
//    
   let show = [];
    let tmp = countersRMap.get('byId').toJS();
    for(let item in tmp){
        console.dir(tmp[item])
        let obj = tmp[item];

        isShowIt(obj)? show.push(obj):null;
            
    }

    return show;
} ;

function isShowIt(counterIt){
    //cialo counter >> par
    // warunek if

    return true;
}