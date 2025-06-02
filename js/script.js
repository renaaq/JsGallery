/*Name this external file gallery.js*/

function upDate(previewPic){
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
 
 imageDiv.innerHTML = previewPic.alt;
	}

	function unDo(){
    let imageDiv = document.getElementById("image");
        imageDiv.style.backgroundImage = "url('')";
        imageDiv.innerHTML = "Hover over an image below to display here";
        imageDiv.style.backgroundColor = '#000000a0'; // fondo oscuro semitransparente para el texto
        imageDiv.style.color = 'white';
        imageDiv.style.padding = '20px';
	}

    window.onload = function() {
        console.log("Page loaded successfully.");
        let previews = document.querySelectorAll('.preview');
        for (let i=0; i < previews.length; i++) {
            previews [i].setAttribute('tabindex', '0')
        }
    }