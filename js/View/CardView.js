class CardView extends View{
    constructor(elemento){
       super(elemento);

       this.img1 = "../bezerra_teste/images/slidesb/unidadejua.jpg";
       this.img2 = "../bezerra_teste/images/slidesb/jua2.jpg";
       this.img3 = "../bezerra_teste/images/slidesb/imd2.jpg";
       this.img4 = "../bezerra_teste/images/slidesb/imd3.jpg";
      
    }
      
    template(){
        return `
    <div class="container">
        <div class="row center">
                <div class="col-4" >
                        <img src="${this.img1}" style="width: 350px; height: 263px;" >
                      <p>BEZERRA AUTO CENTER - CENTRO AUTOMOTIVO<br>
                        RUA 06, NÚMERO 02, BAIRRO: ALTO </br>DO CRUZEIRO,
                        JUAZEIRO-BAHIA. CEP: 48.900-400:</p>
                       <img src="${this.img2}" style="width: 350px; height: 263px; ">
                     <p>AUTOPEÇAS E EQUIPADORA BEZERRA<br> RUA 07,
                        NÚMERO 01A, BAIRRO: ALTO DO </br>CRUZEIRO, JUAZEIRO - BAHIA. CEP: 48.900-410.</p>
                </div>
             
                <div class="row center">
                     <div class="col-7" >
                        <img src="${this.img3}" style="width:350px; height:263px; ">
                      <p >LOJA 01: BEZERRA AUTOPEÇAS PETROLINA<br>
                        AV. SETE DE SETEMBRO, NÚMERO 229, BAIRRO: JARDIM MARAVILHA,
                         PETROLINA - PERNAMBUCO. </br>CEP: 56.306-610.</p>
                        <img src="${this.img4}" style="width:350px; height:263px; ">
                      <p >LOJA 02: BEZERRA AUTOPEÇAS <br>
                        AV. CORONEL ANTÔNIO HONORATO VIANA, Nº 1770,
                         JARDIM MARAVILHA, PETROLINA-PE.</p>
                </div>
        </div> 
    </div>
      
        
        `;

    }
}