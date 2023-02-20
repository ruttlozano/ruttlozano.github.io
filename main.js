let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #FF8487;"> Desarrollo sitios web y analizo datos.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
