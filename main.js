let btnSeguir= document.getElementById("btn-seguir");
let cantidadLikes=document.getElementById("cantidad-likes");
let btnLike= document.getElementById("btn-like");
let inputUser=document.getElementById("input-User")
let btnComentar= document.getElementById("btn-comentar");
let inputComentario=document.getElementById("input-comentario")
let nuevoComentario=document.getElementById("nuevo-comentario")
let btnCerrar=document.getElementById("close-modal")

let seguido=false;
let meGusta=false;
let likes=200;
let nombreUsuario="";
let id=0;
cantidadLikes.innerHTML=likes;

let Seguir =()=>{
   if(seguido==false){
    seguido=true;
    btnSeguir.innerHTML = "Dejar de seguir";
    btnSeguir.classList.remove("btn-primary");
    btnSeguir.classList.add("btn-secondary");
    }
    else{
        seguido=false
        btnSeguir.innerHTML = "Seguir";
        btnSeguir.classList.remove("btn-secondary");
        btnSeguir.classList.add("btn-primary");
    }
}

let Like =()=>{
    if(meGusta==false){
        meGusta=true;
        btnLike.innerHTML = "No me gusta";
        btnLike.classList.remove("bg-body-tertiary");
        btnLike.classList.add("bg-body-secondary");
        likes+=1
        cantidadLikes.innerHTML=likes;
        }
        else{
            meGusta=false
            btnLike.innerHTML = "Me gusta";
            btnLike.classList.remove("bg-body-secondary");
            btnLike.classList.add("bg-body-tertiary");
            likes-=1
            cantidadLikes.innerHTML=likes;
           }
}

let Comentar=(event)=>{
    event.preventDefault()
    if (nombreUsuario == ""){
        Modal()
    }
    else{

        if(inputComentario.value != ""){
            let nuevoId= id+=1
            let comentario=document.createElement("div")
            comentario.innerHTML="";
            comentario.id=nuevoId;
            document.getElementById("container-comentario").appendChild(comentario);
            comentario.classList.remove("text-danger");

            comentario.innerHTML= `
                                <div class="row comentarios"> 
                                    <div class="col-9 m-1 mb-1">
                                        <span class="me-2 fw-bold text-primary"> ${nombreUsuario} </span> 
                                        ${inputComentario.value} 
                                    </div>
                                    <div class="col d-flex justify-content-end "> 
                                    <button  type="button" class="btn btn-outline-danger btnEliminar" onClick=Eliminar(${nuevoId})> Eliminar </button>
                                    </div>
                                </div>
                                 `

        inputUser.classList.remove("is-valid");
        inputUser.value=""
        inputComentario.value=""
        nombreUsuario=""
        }
            
                else{
                    inputComentario.value="";
                    let comentario = document.createElement("div");
                    document.getElementById("container-comentario").appendChild(comentario);
                    comentario.innerHTML="Debe escribir algo";
                    comentario.classList.add("text-danger","fs-6", "m-1");
                
                    setTimeout(() => {
                        comentario.style.display = "none";
                    }, 3000);
                }
              
    }
   
}

let Eliminar=(id)=>{
    let comentario=document.getElementById(id); 
    comentario.remove();
    inputComentario.value="";
}

let Modal =()=>{
    document.getElementById("modal").style.display = "block";
   }
 
let CerrarModal=()=>{
    document.getElementById("modal").style.display = "none";
   }

   inputUser.addEventListener("keydown", function(e) {
    if (e.code === "Enter") {
      e.preventDefault();
      nombreUsuario = inputUser.value;
      inputUser.classList.add("is-valid");
    }
   
   
  });

btnSeguir.addEventListener("click", Seguir);
btnLike.addEventListener("click", Like);
btnCerrar.addEventListener("click", CerrarModal)
btnComentar.addEventListener("click", Comentar)


