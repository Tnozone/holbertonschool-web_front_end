function createElement(data) {
    document.createElement("p");
    p.innerHTML = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(xhr.response.query.pages["21721040"].extract);
          }
    }
    const url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.send(null);
}

queryWikipedia(createElement);

