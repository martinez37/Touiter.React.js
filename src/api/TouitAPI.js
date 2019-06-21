const URL = "touiteur.cefim-formation.org";

function httpGetMessages(timestamp, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://' + URL + '/list?ts=' + encodeURIComponent(timestamp), true);
    request.addEventListener('readystatechange', function () {
        if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            callback(JSON.parse(request.responseText));
        }
    });
    request.send();
}



function httpPostMessage(name, message, callback) {
}



function httpGetTrending(callback) {

}

export { httpGetMessages, httpPostMessage };



///
