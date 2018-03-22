/**
 * Created by Ashfaq on 7/11/17.
 */
function resizeText(multiplier) {
    if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "2.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
}

/*var currentZoom = 100;
function zoom(paramvar)
{
    currentZoom += paramvar;
    document.body.style.zoom =  currentZoom + "%"
}*/