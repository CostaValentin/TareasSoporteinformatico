/* validacion con jquery */

const $btn = $("#btn");

$btn.click((e) => {
  e.preventDefault();
  
  const $name = $("#name");
  const $pass = $("#pass");
  const $form = $("#form");
  
  const passValue = $pass.val();
  
  $name.toggleClass("is-invalid", $name.val().length > 10);
  $name.toggleClass("is-valid", $name.val().length <= 10);
  
  const cont = passValue.match(/[A-Z]/g)?.length ?? 0;
  
  $pass.toggleClass("is-invalid", cont === 0);
  $pass.toggleClass("is-valid", cont > 0);
});


/* validacion sin jquery */


/* const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const pass = document.getElementById("pass");
  const form = document.getElementById("form");

  const passValue = pass.value;

  name.classList.toggle("is-invalid", name.value.length > 10);
  name.classList.toggle("is-valid", name.value.length <= 10);

  const cont = (passValue.match(/[A-Z]/g) || []).length;

  pass.classList.toggle("is-invalid", cont === 0);
  pass.classList.toggle("is-valid", cont > 0);
}); */