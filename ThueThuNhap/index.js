document.querySelector('.btnTinh').onclick = TinhTien

function TinhTien(){
    var hoten = document.querySelector('#ipHoTen').value
    var tongthunhapnam = document.querySelector('#ipTongThuNhapNam').value
    var songuoiphuthuoc = document.querySelector('#ipSoNguoiPhuThuoc').value

    var inComeTax = tongthunhapnam - 4000000 - (songuoiphuthuoc * 1600000);
    console.log(inComeTax);
    var resutl = CheckTax(inComeTax);
    document.querySelector('.dvResutl').innerHTML = hoten + " thue thu nhap: "+ resutl 
}

function CheckTax(InCome){
    value = 0
    debugger
    switch (true) {
        case InCome == 60000000:
            value = InCome * (5/100)
            break;
        case (InCome > 60000000 && InCome <= 120000000):
            value = InCome * (10/100)
            break;
        case (InCome > 120000000 && InCome <= 210000000):
            value = InCome * (15/100)
            break;
        case (InCome > 210000000 && InCome <= 384000000):
            value = InCome * (20/100)
            break;
        case (InCome > 384000000 && InCome <= 624000000):
            value = InCome * (25/100)
            break;
        case (InCome > 624000000 && InCome <= 960000000):
            value = InCome * (30/100)
            break;
        case (InCome > 960000000):
            value = InCome * (35/100)
            break;
        default:
            value = InCome
            break;
    }
    return value;
}