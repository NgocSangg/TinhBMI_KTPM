function tinhBMI() {
    var a = document.getElementById("input_1").value;
    document.getElementById("HoTen").innerText = a;
    var b = document.getElementById("input_2").value;
    document.getElementById("BMI").innerText = c / b*b;

    var c = document.getElementById("input_3").value;
    
    var d = document.getElementById("input_2", "input_3").value;
    d = c / (b*b);
    // var d = c / b*b;
    document.getElementById("BMI").innerText = d;
    var img_bmi;
    var x;

    if(d >= 25){
        x = 'Thừa cân'
        document.getElementById("TinhTrang").innerText = x;
        img_bmi = "https://thcs-thptlongphu.edu.vn/wp-content/uploads/2023/03/hinh-anh-dep-tren-mang2b252822529.jpg"
        document.getElementById("Hinh_anh").setAttribute("src",img_bmi)

       

    }else if(d >= 18.5){
        x = 'Bình thường'
        document.getElementById("TinhTrang").innerText = x;
        img_bmi = "https://duhocchaudaiduong.edu.vn/mot-so-hinh-nen-dep/imager_2_3642_700.jpg"
        document.getElementById("Hinh_anh").setAttribute("src",img_bmi)

    }else{
        x = 'gầy'
        document.getElementById("TinhTrang").innerText = x;
        img_bmi = "https://i.pinimg.com/736x/56/86/03/568603cbd1860c67bf8f6776cbe7f885.jpg"
        document.getElementById("Hinh_anh").setAttribute("src",img_bmi)


    }

}