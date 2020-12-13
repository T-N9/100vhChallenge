let i=0,z=0,y=0;
let title1 = '100vh';
let title2 = 'challenge';
let byme = 'by tenyain moe lwin';


function typeWriter() {
  if (i < title1.length) {
    document.getElementById("t1").innerHTML += title1.charAt(i);
    i++;
    setTimeout(typeWriter, 500);
  }
  if (z < title2.length) {
    document.getElementById("t2").innerHTML += title2.charAt(z);
    z++;
    setTimeout(typeWriter, 600);
  }
  if (y < byme.length) {
    document.getElementById("byMe").innerHTML += byme.charAt(y);
    y++;
    setTimeout(typeWriter, 550);
  }
}