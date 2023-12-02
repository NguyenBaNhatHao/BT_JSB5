document.querySelector('.btnAdd').onclick = addInput
document.querySelector('.btnTinh').onclick = TinhTien

const container = document.getElementById('input-cont');
var temp = 1;
function addInput(){
    let inputKwh = document.createElement('input');
    let inputCurrency = document.createElement('input');

    inputKwh.placeholder = 'Type something';
    inputKwh.className = 'form-control'
    inputKwh.placeholder = 'Nhap Kwh '+temp
    inputKwh.id = 'ipKwh'+temp;

    inputCurrency.placeholder = 'Type something';
    inputCurrency.className = 'form-control'
    inputCurrency.placeholder = 'Nhap vnd '+temp
    inputCurrency.id = 'ipCurrency'+temp;

    container.appendChild(inputKwh);
    container.appendChild(inputCurrency);
    temp++;
}

function TinhTien(){
    var arrKwh = []
    var arrCurency = []
    for (let i = 1; i < temp; i++) {
        var kwh = document.getElementById('ipKwh'+i).value
        var currency = document.getElementById('ipCurrency'+i).value
        arrKwh.push(kwh)
        arrCurency.push(currency)
    }
    var resutl = 0
    for (let i = 0; i < arrKwh.length; i++) {
        var valuekwh = arrKwh[i];
        var sum = 0;
        for (let j = i; j <= i; j++) {
            
            const valuecurrency = arrCurency[j];
            var tempValue = parseInt(valuekwh * valuecurrency)
            console.log('tempValue: '+ tempValue);
            sum += tempValue;
        }
        resutl += sum;
    }

    document.querySelector('.dvResutl').innerHTML = resutl
    console.log(resutl);
}