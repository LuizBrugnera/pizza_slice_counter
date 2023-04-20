function mostrarImagem() {
  let imagem = document.createElement("img");

  let numero = Math.floor(Math.random() * 5) + 1;
  let rotate = Math.floor(Math.random() * 360);

  imagem.style.transform = `rotate(${rotate}deg)`;
  imagem.classList.add("img");
  imagem.src = `assets/slice_${numero}.png`;

  imagem.style.left = Math.random() * (window.innerWidth - 400) + "px";
  imagem.style.top = Math.random() * (window.innerHeight - 400) + "px";

  document.body.appendChild(imagem);
}

const btn_add_slice = document.getElementById("add_slice");
const btn_remove_slice = document.getElementById("remove_slice");
const contador = document.getElementById("contador");

btn_add_slice.addEventListener("click", () => {
  contador.innerHTML = parseInt(contador.innerHTML) + 1;
});
btn_remove_slice.addEventListener("click", () => {
  contador.innerHTML = parseInt(contador.innerHTML) - 1;
});

if (window.innerWidth > 768) {
  btn_add_slice.addEventListener("click", mostrarImagem);
}
