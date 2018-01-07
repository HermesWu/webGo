//做饭 =》 买菜

    // function buy(callback) {
    //     setTimeout(() => {
    //         let a = '蘑菇';
    //         callback(a);
    //     },2000);
    // }



    // buy(val => {
    //     console.log(val);
    // });

    // let p = new Promise((resolve, reject) => {
    //     setTimeout(function() {
    //         let a = '蘑菇';
    //         resolve(a);
    //     },2000);
    // });
    // p.then((data) => {console.log(data)}, (data) => {console.log('err')});

    function buy() {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                if(Math.random() > 0.5) {
                    resolve('买');
                }else {
                    reject('不买');
                }
            }, Math.random() * 1000);
        })
    }

    buy().then((data) => {console.log(data)}, (data) => {console.log(data)});