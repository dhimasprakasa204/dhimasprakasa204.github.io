var html = $("html")

$(function darkmode() {
    $(".toggle").click(function() {
        if (html.hasClass("dark-mode")) {
            html.removeClass("dark-mode");
            html.addClass("light-mode");
            localStorage.setItem("dark-mode", false);
        }

        else {
            html.removeClass("light-mode")
            html.addClass("dark-mode");
            localStorage.setItem("dark-mode", true);
        }
    })
})
        
if (localStorage.getItem("dark-mode") == "true") {
	$(" html").addClass("dark-mode");
}

var konfirmasi = confirm("MAU LIHAT WEB CANAIKU?");

if(konfirmasi == true){
    alert("SELAMAT DATANG DI WEB CANAIKU");

} else {
    console.log("Batal")
}