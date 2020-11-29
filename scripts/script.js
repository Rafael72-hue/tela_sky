var carrossel_images = [];
var catalog_movies = [];
var filmeAcao = [];
var filmeTerror = [];
var filmeComedia = [];

fetch('https://sky-frontend.herokuapp.com/movies')
.then(response =>  {
    return response.json();
}).then(json=> {
     console.log(json);
   
 carrossel_images.push(json[0]);
    carrossel_images.forEach((item) =>{
         console.log(item.items)
        item.items.forEach((imagens,i) => {
             if(i === 0){
                $("#carrossel").after('<section id=img'+i+' class="carousel-item active">'+
                '<img class="d-block w-100" src='+imagens.images[0].url+' alt="Segundo Slide">'+
                '</section>');
             }else{
                $("#carrossel").after('<section id=img'+i+' class="carousel-item ">'+
                '<img class="d-block w-100" src='+imagens.images[0].url+' alt="Segundo Slide">'+
                '</section>');
             };
          
      });
        
      catalog_movies.push(json[2]);
      // catalog_movies.filter(catalog_movies.type)
      // console.log(catalog_movies.type)
      // console.log(catalog_movies)
      catalog_movies.forEach(filmes =>{
      filmes.movies.forEach((bom,i) => {
         filmeAcao = filmes.movies.filter(function (filme){
            return filme.categories.includes("Ação e Aventura");
         });
         
         filmeTerror = filmes.movies.filter(function (filme){
            return filme.categories.includes("Terror");
         });

         filmeComedia = filmes.movies.filter(function (filme){
            return filme.categories.includes("Comédia");
         });

         // var teste = document.createElement('IMG')
         // teste.setAttribute('src', bom.images[0].url)
         // document.querySelector('#catalog_action_movies').appendChild(teste)
      });
      console.log("ação");
console.log(filmeAcao);
console.log("terror");
console.log(filmeTerror);
   })
});
// console.log(listaItems);
//     listaItems.forEach(img =>{
//         console.log(img);
//     });
filmeAcao.forEach(capaAcao => {
   var filmesAcao = document.createElement("IMG")
   filmesAcao.setAttribute('src', capaAcao.images[0].url)
   document.querySelector('#catalog_movies_action').appendChild(filmesAcao)
});

filmeTerror.forEach(capaTerror => {
   var filmesTerror = document.createElement('IMG')
   filmesTerror.setAttribute('src', capaTerror.images[0].url)
   document.querySelector('#catalog_movies_terror').appendChild(filmesTerror)
});

filmeComedia.forEach(capaComedia => {
   var filmesComedia = document.createElement('IMG')
   filmesComedia.setAttribute('src', capaComedia.images[0].url)
   document.querySelector('#catalog_movies_comedia').appendChild(filmesComedia)
});
})
