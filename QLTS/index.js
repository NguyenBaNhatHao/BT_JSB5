var message = ""
document.querySelector('.btnTinh').onclick = main
function main() {
    var DiemChuan = +document.getElementById('ipDiemChuan').value;
    var Diem1 = +document.querySelector('#ipDiemMon1').value;
    var Diem2 = +document.querySelector('#ipDiemMon2').value;
    var Diem3 = +document.querySelector('#ipDiemMon3').value;
    var DiemKhuVuc = document.querySelector('#ipDiemKhuVuc').value;
    var DiemUuTien = +document.querySelector('#ipDiemUuTien').value;
    
    var Diem3Mon = TongDiem3Mon(Diem1,Diem2,Diem3);
    var DiemBonus = {};
    DiemBonus['DiemKhuVuc'] = DiemKhuVuc;
    DiemBonus['DiemUuTien'] = DiemUuTien;

    if(DiemBonus['DiemKhuVuc'] == "X"){
        DiemBonus['DiemKhuVuc'] = 0
    }else if (DiemBonus['DiemUuTien'] == "0"){
        DiemBonus['DiemUuTien'] = 0
    }

    message = LogError(message, DiemKhuVuc);
    if(message != ""){
        alert(message);
        return;
    }

    var sum = TongDiem(Diem3Mon, DiemBonus);
    if(sum >= DiemChuan){
        document.querySelector('.dvResutl').innerHTML = 'Dau'
        console.log('Dau')
    } else{
        document.querySelector('.dvResutl').innerHTML = 'Rot'
        console.log('Rot')
    }

}

function TongDiem3Mon(Diem1,Diem2,Diem3){
    var Diem3Mon = Diem1 + Diem2 + Diem3;
    return Diem3Mon;
}

function TongDiem (Diem3Mon, DiemBonus){
    for (var item in DiemBonus){
        Diem3Mon += DiemBonus[item]
    }
    return Diem3Mon;
}

function LogError(message, input){
    debugger
    let check = input.indexOf("x") == -1
    if(check == true || typeof(input) != "string"){
        console.log(typeof(input));
        message = "nhap dung ki tu dum";
    }
    return message;
}