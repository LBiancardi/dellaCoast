function show_info(card_position) {
  const show_info = document.querySelectorAll(".itens");
  // const itens_link = document.querySelectorAll(".itens__link");

  show_info[card_position].classList.toggle("active");
}