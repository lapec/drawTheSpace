var camera, scene, renderer;
var geometry, material, ikosahedron1, controls;
var onRenderFcts = [];

camera = new THREE.PerspectiveCamera(125, window.innerWidth/window.innerHeight, 1, 10000);
camera.position.z = 120;

scene = new THREE.Scene();

controls = new THREE.OrbitControls( camera );
// axes
scene.add( new THREE.AxisHelper( 1000 ) );

//kreiranje renderer-a
renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0X000000);
document.body.appendChild( renderer.domElement );
//na sceni su:

newSun = new Pyramix.GeneratePredefinedGeometry(
    type   = 'Icosahedron',
    name   = 'sun',
    radius = 10,
    width  = 20,
    height = 20,
    depth  = 20,
    posx   = 0,
    posy   = 0,
    posz   = 80,
    color  ='red',
    wireframeState = true
);

AnimateSun = Pyramix.animate(
    name = 'sun',
    sateliteObjectName = false,
    rotationAroundAxis = true,
    rotationAroundSun = false
);


merkur = new Pyramix.GeneratePredefinedGeometry(
    type   = 'Icosahedron',
    name   = 'merkur',
    radius = 3,
    width  = 0,
    height = 0,
    depth  = 0,
    posx   = -20,
    posy   = 0,
    posz   = 10,
    color  ='gray',
    wireframeState = true
);

AnimateMerkur = Pyramix.animate(
    name = 'merkur',
    pointOfRotation = 'sun',
    rotationAroundAxis = false,
    rotationAroundSun = true
);


venera = new Pyramix.GeneratePredefinedGeometry(
    type   = 'Icosahedron',
    name   = 'venera',
    radius = 3,
    width  = 0,
    height = 0,
    depth  = 0,
    posx   = -40,
    posy   = 0,
    posz   = 30,
    color  ='orange',
    wireframeState = true
);

AnimateVenera = Pyramix.animate(
    name = 'venera',
    pointOfRotation = 'sun',
    rotationAroundAxis = false,
    rotationAroundSun = true
);

zemlja = new Pyramix.GeneratePredefinedGeometry(
    type   = 'Icosahedron',
    name   = 'zemlja',
    radius = 3,
    width  = 0,
    height = 0,
    depth  = 0,
    posx   = -60,
    posy   = 0,
    posz   = 50,
    color  ='blue',
    wireframeState = true
);

AnimateZemlja = Pyramix.animate(
    name = 'zemlja',
    pointOfRotation = 'sun',
    rotationAroundAxis = false,
    rotationAroundSun = true
);

mars = new Pyramix.GeneratePredefinedGeometry(
    type   = 'Icosahedron',
    name   = 'mars',
    radius = 3,
    width  = 0,
    height = 0,
    depth  = 0,
    posx   = -80,
    posy   = 0,
    posz   = 70,
    color  ='red',
    wireframeState = true
);

AnimateMars = Pyramix.animate(
    name = 'mars',
    pointOfRotation = 'sun',
    rotationAroundAxis = false,
    rotationAroundSun = true
);

jupiter = new Pyramix.GeneratePredefinedGeometry(
    type   = 'Icosahedron',
    name   = 'jupiter',
    radius = 3,
    width  = 0,
    height = 0,
    depth  = 0,
    posx   = -100,
    posy   = 0,
    posz   = 100,
    color  ='white',
    wireframeState = true
);

AnimateJupiter = Pyramix.animate(
    name = 'jupiter',
    pointOfRotation = 'sun',
    rotationAroundAxis = false,
    rotationAroundSun = true
);

saturn = new Pyramix.GeneratePredefinedGeometry(
    type   = 'Icosahedron',
    name   = 'saturn',
    radius = 4,
    width  = 0,
    height = 0,
    depth  = 0,
    posx   = -120,
    posy   = 0,
    posz   = 120,
    color  ='gray',
    wireframeState = true
);

AnimateSaturn = Pyramix.animate(
    name = 'saturn',
    pointOfRotation = 'sun',
    rotationAroundAxis = false,
    rotationAroundSun = true
);

uran = new Pyramix.GeneratePredefinedGeometry(
    type   = 'Icosahedron',
    name   = 'uran',
    radius = 3,
    width  = 0,
    height = 0,
    depth  = 0,
    posx   = -140,
    posy   = 0,
    posz   = 140,
    color  ='lightblue',
    wireframeState = true
);

AnimateUran = Pyramix.animate(
    name = 'uran',
    pointOfRotation = 'sun',
    rotationAroundAxis = false,
    rotationAroundSun = true
);

neptun = new Pyramix.GeneratePredefinedGeometry(
    type   = 'Icosahedron',
    name   = 'neptun',
    radius = 3,
    width  = 0,
    height = 0,
    depth  = 0,
    posx   = -160,
    posy   = 0,
    posz   = 160,
    color  ='blue',
    wireframeState = true
);

AnimateNeptun = Pyramix.animate(
    name = 'neptun',
    pointOfRotation = 'sun',
    rotationAroundAxis = false,
    rotationAroundSun = true
);


/*
FlatEarth = new Pyramix.GeneratePredefinedGeometry(
    type   = 'Box',
    name   = 'FlatEarth',
    radius = 0,
    width  = 990,
    height = 20,
    depth  = 990,
    posx   = -20,
    posy   = -20,
    posz   = 0,
    color  = 'gray',
    wireframeState = false
);
*/
//oneHundredFootballs
for(individualBall=0; individualBall<=200; individualBall++){

    Footballs = new Pyramix.GeneratePredefinedGeometry(
        type   = 'Icosahedron',
        name   = 'lopte'+individualBall,
        radius = 2,
        width  = 0,
        height = 0,
        depth  = 0,
        posx   = ( Math.random()*400 ) - 150,
        posy   = 40,
        posz   = ( Math.random()*400 ) - 150,
        color  ='SlateBlue ',
        wireframeState = true
    );
//animate hundred balls in one line
AnimateFootballs = Pyramix.AnimatePredefinedGeometry(name = 'lopte'+individualBall);
}


////////////////////////////////////////
///// Refresh scene i kamere ///////////
///////////////////////////////////////
onRenderFcts.push(function(){
   renderer.render(scene, camera);
})
//////////////////////////////////
///// RENDER funkcija ///////////
////////////////////////////////

// run the rendering loop
var lastTimeMsec= null
requestAnimationFrame(function animate(nowMsec){
    // keep looping
    requestAnimationFrame( animate );
    // measure time
    lastTimeMsec    = lastTimeMsec || nowMsec-1000/60
    var deltaMsec   = Math.min(200, nowMsec - lastTimeMsec)
    lastTimeMsec    = nowMsec
    // call each update function
    onRenderFcts.forEach(function(onRenderFct){
        onRenderFct(deltaMsec/1000, nowMsec/1000)
    })
})
