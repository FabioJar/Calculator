function res(){
    const res = document.querySelector('#result').innerHTML
    return res
}

function call(y) {
    document.querySelector('#result').innerHTML = res() + y
}

function clean() {
    document.querySelector('#result').innerHTML = ""
}

function backSpace() {
    document.querySelector('#result').innerHTML = res().substring(0, res().length -1)
}

function calc() {
    document.querySelector('#result').innerHTML = eval(res())
}