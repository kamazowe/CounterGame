//Reds
export function selectorCounterRed (countersRMap){
   let show = [];
    let tmp = countersRMap.get('byId').toJS();
    for(let item in tmp){
        console.dir(tmp[item])
        let obj = tmp[item];

        isShowItR(obj)? show.push(obj):null;
            
    }

    return show;
} ;
function isShowItR(counterIt){
    //cialo counter >> par
    // warunek if

    return true;
}

//Yellows
export function selectorCounterYellow (countersYMap){
    let show = [];
     let tmp = countersYMap.get('byId').toJS();
     for(let item in tmp){
         console.dir(tmp[item])
         let obj = tmp[item];
 
         isShowItY(obj)? show.push(obj):null;
             
     }
 
     return show;
 } ;
 function isShowItY(counterIt){
     //cialo counter >> par
     // warunek if
 
     return true;
 }