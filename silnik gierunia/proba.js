function sraka(){
const container = document.getElementById('container');
  const background = document.getElementById('background');
  let isMouseDown = false;
  let startX;
  let scrollLeft;
  const container2 = document.getElementById('container2');
  const background2 = document.getElementById('background2');
  let isMouseDown2 = false;
  let startX2;
  let scrollLeft2;

  container2.addEventListener('mousedown', (e) => {
    isMouseDown2 = true;
    startX2 = e.pageX - container2.offsetLeft;
    scrollLeft2 = container2.scrollLeft;
    container.scrollLeft = container2.scrollLeft;
  });

  container2.addEventListener('mouseleave', () => {
    isMouseDown2 = false;
  });

  container2.addEventListener('mouseup', () => {
    isMouseDown2 = false;
  });

  container2.addEventListener('mousemove', (e) => {
    if (!isMouseDown2) return;
    e.preventDefault();
    const x = e.pageX - container2.offsetLeft;
    const walk = (x - startX2) * 3;
  //RESPONSYWNOŚĆ DO ZROBIENIA!!!
    let newScrollLeft2 = Math.max(0, Math.min(scrollLeft2 - walk, 840));
  //RESPONSYWNOŚĆ DO ZROBIENIA!!!
    container2.scrollLeft = newScrollLeft2;
    container.scrollLeft = container2.scrollLeft;
   
  });

  container.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isMouseDown = false;
  });

  container.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  container.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3;
    let newScrollLeft = Math.min(scrollLeft - walk, background2.offsetWidth);
    if (newScrollLeft > 840) {
      newScrollLeft = 840;
    }
    container.scrollLeft = newScrollLeft;
    container2.scrollLeft = container.scrollLeft;
  });
}
  function klik(){
    root.innerHTML = startGame;
    ruszanieTlem()
  }
  function carFirst(){
    root.innerHTML = mleko;
   sraka()
  }
  function powrot(){
    console.log("dziala lol xd")
    root.innerHTML = startGame;
    ruszanieTlem()
    sraka()
  }
  function chinolek(){
    root.innerHTML = chinol;
  sraka()
  }
  function stacyjka(){
    root.innerHTML = stacja;
  sraka()
  }
  
  