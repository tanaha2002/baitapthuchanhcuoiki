$(document).ready(function(){
    var i =1;
    $("#dangky").click(function(){
        $("#myModal").modal()
    })
    function kiemtrahoten(){
        let maukt = /^[A-Z]{1}([a-z]+)(\s{1}[A-Z]{1}([a-z]+)){1,}$/;
        if($("#name").val()==""){
            tbName.innerText = "Không được để trống";
            return false;
        }
        else{
            if(maukt.test($("#name").val())==true)
            {
                $("#tbName").attr('class','text-success');
                tbName.innerText = "Chấp nhận";
                return true;
            }
            else{
                tbName.innerText = "Sai định dạng";
                return false;
            }
        }
    }
    $("#name").blur(kiemtrahoten);
    function kiemtraAo(){
        let maukt = /([0-9]+)$/;
        var ao = $("#ao").val();
        if($("#ao").val()==""){
            tbAo.innerText = "Không được để trống";
            return false;
        }
        if(maukt.test(ao)==true){
            
            if(parseInt(ao) <=20 && parseInt(ao) >= 1)
            {
                $("#tbAo").attr('class','text-success');
                tbAo.innerText = "Chấp nhận";
                return true;
            }
            else{
                tbAo.innerText = "từ 1 đến 20";
                return false;
            }
        }
        else{
            tbAo.innerText='Không đúng định dạng';
        }
    }
    $("#ao").blur(kiemtraAo);
    function kiemtraclb(){
        let maukt = /^[A-Z]{1}([a-z0-9]+)|[0-9](\s{1}[A-Z]{1}([a-z0-9]+)|[0-9]){1,}$/;
        if($("#CLB").val()==""){
            tbCLB.innerText = "Không được để trống";
            return false;
        }
        else{
            if(maukt.test($("#CLB").val())==true)
            {
                $("#tbCLB").attr('class','text-success');
                tbCLB.innerText = "Chấp nhận";
                return true;
            }
            else{
                tbCLB.innerText = "Chỉ dùng chữ hoa đầu từ và số";
                return false;
            }
        }
    }
    $("#CLB").blur(kiemtraclb);
    function kiemtraNTT(){
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate()+30);

        if($("#NTT").val()==""){
            tbNTT.innerText = "Không được để trống";
            return false;
        }
        else{
            if(today < ntt)
            {
                $("#tbNTT").attr('class','text-success');
                tbNTT.innerText = "Chấp nhận";
                return true;
            }
            else{
                tbNTT.innerText = "phải sau 1 tháng";
                return false;
            }
        }
    }
    $("#NTT").blur(kiemtraNTT);
    function kiemtraSDT(){
        let maukt = /^0[0-9]{2}-[0-9]{3}-[0-9]{4}$/;
        if($("#SDT").val()==""){
            tbSDT.innerText = "Không được để trống";
            return false;
        }
        else{
            if(maukt.test($("#SDT").val())==true)
            {
                $("#tbSDT").attr('class','text-success');
                tbSDT.innerText = "Chấp nhận";
                return true;
            }
            else{
                tbSDT.innerText = "Sai định dạng";
                return false;
            }
        }
    }
    function kiemtraSDT(){
        let maukt = /^0[0-9]{2}-[0-9]{3}-[0-9]{4}$/;
        if($("#SDT").val()==""){
            tbSDT.innerText = "Không được để trống";
            return false;
        }
        else{
            if(maukt.test($("#SDT").val())==true)
            {
                $("#tbSDT").attr('class','text-success');
                tbSDT.innerText = "Chấp nhận";
                return true;
            }
            else{
                tbSDT.innerText = "Sai định dạng";
                return false;
            }
        }
    }
    $("#SDT").blur(kiemtraSDT);
    $("#Luu").click(function(){
        if(kiemtrahoten()==true && kiemtraAo()==true && kiemtraNTT()==true && kiemtraSDT()==true && kiemtraclb()==true){
            var row = '<tr><th>'+(i++)+'</th><th>' +$("#name").val()+'</th><th>'+$('#ao').val()+'</th><th>'+$("#CLB").val()+'</th><th>'+$("#NTT").val()+'</th><th>'+$("#SDT").val()+'</th></tr>';
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
        else{
            alert("Chưa nhập đủ thông tin hoặc sai");
            }
    })
})