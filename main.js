Webcam.set({
    width:300,
    hight:300,
    dest_width:300,
    dest_hight:300,
    image_format:"png",
    png_quality:90
});
cam=document.getElementById("Show");
Webcam.attach('#Show')
function DONE(){
    Webcam.snap(function(data_url){
        document.getElementById("Done").innerHTML='<img id="DONEDONE" src="'+data_irl+'">';
    });
}