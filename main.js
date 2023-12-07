let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #0e2548;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #0e2548;">Estudiante de ingeniera mecatrónica.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
