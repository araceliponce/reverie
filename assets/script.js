let codeBlocks = document.querySelectorAll('code');

codeBlocks.forEach(c => {
  console.log(c);

  /* c.addEventListener ('click',()=>{
    navigator.clipboard.writeText(c.outerHTML);
  }) */
});



codeBlocks.forEach(c => {
  let copyButton = document.createElement('button');
  copyButton.ariaLabel = 'Copiar bloque de código al portapepeles';
  copyButton.innerText = 'Copiar';
  c.appendChild(copyButton);

  c.addEventListener('click', () => {
    let code = c.querySelector('code').innerText;
    window.navigator.clipboard.writeText(code);

    copyButton.innerText = 'Copiado'

    setTimeout(() => {
      copyButton.innerText = 'Copiar'
    }, 3000);
  })

})

