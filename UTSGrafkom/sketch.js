let gunung1 = 400;
let gunung2 = 200;
let gunung3 = 0;
let lubang = 100
let matahari = 350;
let jalan = [];
let tiang =0;
let kota =0;
let kota2=170;
let img;
let img2;
function setup() { 
  //membuat canvas
  createCanvas(400, 300);
  //gambar tiang
  img = loadImage('png/tiang1.png');
  //gambar kota
  img2 = loadImage('png/kota.png');
  //looping variabel untuk membuka gambar lainya
  for(let i =1; i<=15;i++){ 
    jalan.push(loadImage('png/Walk (' +i+ ').png')); 
          } 
 
  
  frameRate(60);
} 
function draw() { 
  background('white'); 
  
  noStroke();
  //gunung
  fill(192,234,87);
  ellipse(gunung1,200,210,240);
  ellipse(gunung2,200,210,240);
  ellipse(gunung3,220,210,240);

  //matahari
  fill(255,255,0);
  circle(matahari,50,50,50);
  matahari = matahari-0.4;

  //animasi matahari
  if(matahari < -400)matahari=+400;


  //tanah
  fill(0,0,0);
  rect(0,200,450,200)
 

//kecepatan animasi gunung
 gunung1 = gunung1-1.5;
 gunung2 = gunung2-1.5;
 gunung3 = gunung3-1.5;


//animasi gunung
 if(gunung1 <100-400)gunung1=500;
 if(gunung2 <100-400)gunung2=500;
 if(gunung3 <100-400)gunung3=500;


 //gambar kota
 image(img2,kota2,120,120,120)
  image(img2,kota,120,120,120)
  
//kecepatan kota
kota2 = kota2-1;
kota = kota-1;

//animasi kota
if(kota2 <200-300)kota2=400;
if(kota <200-300)kota=400;

//gambar tiang
 image(img,tiang,110,100,100);
 
 //kecepatan tiang
 tiang = tiang -2;

 //animasi tiang
 if(tiang <200-300)tiang=400;
 
 //gambar manusia 
 image(jalan[frameCount %15],100,160,120,120); 

}

