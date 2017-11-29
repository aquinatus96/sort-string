var btn = document.getElementById('btn-sort');

function sortString() {
    var str = document.getElementById('to-sort').value;
    var result = document.getElementById('sort-result');
    var sorted = [];
    sorted.push(str.split('').sort());
    result.value = sorted;
}

btn.addEventListener('click', function () {
    sortString();
})
