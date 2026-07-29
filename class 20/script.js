function handleClick() {
  let passInp = document.getElementById("passInp");
  let password = passInp["value"];
  console.log(password);

  if (!/[0-9]/.test(password)) {
    console.log("Number nhi he");
  }
  if (!/[A-Z]/.test(password)) {
    console.log("Upper Case nhi he");
  }
  if (!/[@*&^%$#!]/.test(password)) {
    console.log("Special character nhi he");
  }
}
