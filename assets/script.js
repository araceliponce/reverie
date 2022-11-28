let codeBlocks = document.querySelectorAll('code');
codeBlocks.forEach(c=>{
  console.log(c.outerHTML);
  c.addEventListener ('click',()=>{
    navigator.clipboard.writeText(c.outerHTML);
});

