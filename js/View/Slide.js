class Slide extends View {
    constructor(elemento) {
        super(elemento)
        this.img1 = "images/slidesb/imd001.jpg";
        this.img2 = "images/slidesb/imd1.jpg";
        this.img3 = "images/slidesb/imd002.jpg";
        this.img4 = "images/slidesb/imd003.jpg";

    }

    template() {
        return `
        <div class=" slideshow-container">
        <div class="mySlides fade-carousel">
            <img src="${this.img1}" style="width:100%; height:600px;">
        </div>
    
        <div class="mySlides fade-carousel">
            <img src="${this.img2}" style="width:100%; height:600px;">
        </div>
        <div class="mySlides fade-carousel">
            <img src="${this.img3}" style="width:100%; height:600px;">
        </div>

        <div class="mySlides fade-carousel">
            <img src="${this.img4}" style="width:100%; height:600px;">
        </div>
    
    <div class="text">
        <span class="dot "></span>
        <span class="dot "></span>
        <span class="dot "></span>
        
    </div>
    <a class="w3-button-indicadores w3-display-left w3-black w3-hover" onclick="plusDivs(-1)">❮</a>
    <a class="w3-button-indicadores w3-display-right w3-black" onclick="plusDivs(1)">❯</a>
    </div>
    `
    }

   

}