document.querySelector('.btnTinh').onclick = TinhTien
CheckLoaiKhachHang();
const container = document.getElementById('input-cont');
function CheckLoaiKhachHang(){
    debugger
    var selectedIndex  = document.getElementById('ipLoaiKhachHang').selectedIndex;
    var selectValue = document.getElementById('ipLoaiKhachHang').options[selectedIndex].value;
    
    switch (selectValue) {
        case "nha_dan":
            document.getElementById('ipKetNoi').disabled = true
            break;
    
        default:
            document.getElementById('ipKetNoi').disabled = false
            break;
    }
}

function TinhTien(){
    var selectedIndex  = document.getElementById('ipLoaiKhachHang').selectedIndex;
    var ipKhachhang = document.getElementById('ipMaKhachHang').value;
    var selectValue = document.getElementById('ipLoaiKhachHang').options[selectedIndex].value;
    var kenh = +document.getElementById('ipKenh').value;
    var ketnoi = +document.getElementById('ipKetNoi').value;
    var sum = 0;
    if(selectValue == "nha_dan"){
        sum = 4.5 + 20.5 + (7.5 * kenh);
    }else if(selectValue == "doanh_nghiep"){
        if(ketnoi > 10){
            sum = 15 + 7.5 + (ketnoi + 5) + (50 * kenh);
        }
        sum = 15 + 7.5 + (50 * kenh);
    }

    document.querySelector('.dvResutl').innerHTML = "So tien khach "+ipKhachhang+" phai tra: "+ sum+"$"
    console.log(sum);
}