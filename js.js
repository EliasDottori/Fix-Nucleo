let texto = `cd C:/OpenSSL-Win32/bin
openssl genrsa -out privada 2048`;

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar texto al portapapeles: ", err);
    });
}

boton = document.getElementById("copy1");

boton.addEventListener("click", copyToClipboard(texto));

////////////////////////////

let boton2 = document.getElementById("copy2");

boton2.addEventListener("click", () => {
  let cuit = document.getElementById("cuit").value;
  let rs = document.getElementById("rs").value;
  const texto2 = `openssl req -new -key privada -subj "/C=AR/O=${rs}/CN=pc/serialNumber=CUIT ${cuit}" -out pedido -config C:/OpenSSL-Win32/bin/openssl.cfg`;

  console.log(rs);
  console.log(cuit);
  copyToClipboard(texto2);
});
