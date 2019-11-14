class NavbarView extends View{
    constructor(elemento) {
        super(elemento)
       this.link1 = "https://api.whatsapp.com/send?phone=5585981663246";

        this.img1 = "images/lb.png";
    }

    template() {
        return `
        <div class="sticky-top">
  <div class="navbar sticky-top navbar-light cornav">
    <a class="navbar-brand Desktop" href="index.html"><img class="logo"src="${this.img1}" alt=""></a>
    <div class="row afastar"> <br>
        <form onsubmit="controle.enviaDesktop(event)" class="form-inline my-2 my-lg-0 font-dark Desktop">
            <input type="text" class="form-control mr-sm-2 placa bordainput" id="placa" placeholder="Placa">
            <input type="text" class="form-control mr-sm-2 produto bordainputproduto" id="produto" placeholder="Produto" />
        <button type="submit" class="cornav" style="border:0"><img src="../bezerra_teste/images/elementos/elem.png" style ="width:35%;"> </button>
        </form>
    </div>
    
    <div> 
    <ul class="nav justify-content-end ">
    <li class="nav-item ">
    <a href="${this.link1}"><i class="fa fa-whatsapp" style="font-size:40px;color:#ffb026; padding-right: 20px;"></i></a>
    </li>
    <li class="nav-item ">
    <a href="https://www.instagram.com/autopecasbezerra/"><i class="fa fa-instagram" style="font-size:40px;color:#ffb026; padding-right: 20px;"></i></a>
    </li>
    <li class="nav-item ">
    <a href="https://www.facebook.com/bezerraautopecas/?fref=ts"><i class="fa  fa-facebook-square" style=" font-size:40px;color:#ffb026; padding-right: 20px;"></i></a>
    </li>
    <li class="nav-item ">
    <a href="https://twitter.com/bezerrautopecas"><i class="fa fa-twitter" style=" font-size:40px;color:#ffb026; "></i></a>
    </li>
    
    
    </div>
       
    
  </div>
  <div class="nav-pills sticky-top" id="pills-tab" role="tablist" style = "background-color:#FFB026;"> 
  <ul class="nav justify-content-center ">
  
  <li class="nav-item hovernav ">
  <a class="nav-link  " id="pills-profile-tab"  href="index.html" role="tab" aria-controls="pills-profile" aria-selected="false"> Home</a>
  </li>
  <li class="nav-item hovernav">
  <a class="nav-link " id="pills-profile-tab" href="file:///C:/Users/pcbibi_pecas/Desktop/bezerra_teste/AEmpresa.html" role="tab" aria-controls="pills-profile" aria-selected="false"> A empresa</a>
  </li>
  <li class="nav-item hovernav">
  <a class="nav-link " id="pills-profile-tab" href="file:///C:/Users/pcbibi_pecas/Desktop/bezerra_teste/NossasLojas.html" role="tab" aria-controls="pills-profile" aria-selected="false"> Nossas Lojas</a>
  </li>
  <!--<li class="nav-item hovernav">
  <a class="nav-link " id="pills-profile-tab"  href="https://www.pecicero.com.br/produtos-e-servicos/" role="tab" aria-controls="pills-profile" aria-selected="false">Produtos e Serviços</a>
  </li>
  <li class="nav-item hovernav">
  <a class="nav-link " id="pills-profile-tab"  href="https://www.pecicero.com.br/vendas-para-empresas/" role="tab" aria-controls="pills-profile" aria-selected="false">Vendas para empresas</a>
  </li>
  <li class="nav-item hovernav">
  <a class="nav-link" id="pills-profile-tab"  href="https://www.pecicero.com.br/blog/" role="tab" aria-controls="pills-profile" aria-selected="false">Blog</a>-->
  </li>
  <li class="nav-item hovernav">
  <a class="nav-link" id="pills-profile-tab"  href="file:///C:/Users/pcbibi_pecas/Desktop/bezerra_teste/Contato.html" role="tab" aria-controls="pills-profile" aria-selected="false">Contato</a>
  </li>
  
  </ul>
  </div>
  </div>`
    }



}