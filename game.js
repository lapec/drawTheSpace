var camera, scene, renderer;
var geometry, material, ikosahedron1, controls;
var onRenderFcts = [];

camera = new THREE.PerspectiveCamera(125, window.innerWidth/window.innerHeight, 1, 10000);
camera.position.z = 100;

scene = new THREE.Scene();

controls = new THREE.OrbitControls( camera );

//kreiranje renderer-a
renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xffffff);
document.body.appendChild( renderer.domElement );
//na sceni su:

FootballEarth = new Pyramix.GeneratePredefinedGeometry(
    type   = 'Icosahedron',
    name   = 'zemlja',
    radius = 10,
    width  = 20,
    height = 20,
    depth  = 20,
    posx   = 0,
    posy   = 0,
    posz   = 80,
    color  ='blue',
    wireframeState = true
);

AnimateEarth = Pyramix.AnimatePredefinedGeometry(name = 'zemlja');

Moon = new Pyramix.GeneratePredefinedGeometry(
    type   = 'Icosahedron',
    name   = 'mesec',
    radius = 3,
    width  = 0,
    height = 0,
    depth  = 0,
    posx   = -20,
    posy   = 0,
    posz   = 80,
    color  ='yellow',
    wireframeState = true
);

AnimateMoon = Pyramix.AnimatePredefinedGeometry(name = 'mesec');

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

//oneHundredFootballs
for(individualBall=0; individualBall<=100; individualBall++){

    Footballs = new Pyramix.GeneratePredefinedGeometry(
        type   = 'Icosahedron',
        name   = 'lopte'+individualBall,
        radius = 2,
        width  = 0,
        height = 0,
        depth  = 0,
        posx   = individualBall-20,
        posy   = Math.random()*10,
        posz   = 60,
        color  ='navy',
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
