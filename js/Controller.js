class Controller{
    constructor(){
        let get = document.querySelector.bind(document)
        //View 
        this.navbar = new NavbarView(get("#navbar"));
        this.slides = new Slide(get("#slid"));
        this.footer = new FooterView(get("#foot"));
         
        
        this.init()
        //model
        this.validacaoDesktop = new Bibi(get("#placa"),get("#produto"));
        this.validacaoMobile = new Bibi(get("#placaMobile"),get("#produtoMobile")); 
    }

    init(){
        this.navbar.update();
        this.slides.update();
        this.footer.update();
    }
   enviaDesktop(event){
       event.preventDefault()
       return this.validacaoDesktop.init(event);
    
    }
    enviaMobile(event){
        event.preventDefault()
        return this.validacaoMobile.init(event);
    }
}