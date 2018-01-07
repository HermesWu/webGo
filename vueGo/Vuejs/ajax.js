function ajax({url='', type='get', dataType='json'}) {
    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open(type, url, true);
        xhr.response = dataType;
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function () {
            reject(err);
        }
        xhr.send();
    })
}