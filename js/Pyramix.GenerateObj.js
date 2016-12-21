var Pyramix	= Pyramix || {};


Pyramix.GeneratePredefinedGeometry = function(type, name, radius, width, height, depth, posx, posy, posz, color, wireframeState)
{
    if(type==='Icosahedron'){
        let geometry = new THREE.IcosahedronGeometry( radius,1 );
        let material = new THREE.MeshBasicMaterial( { color: color, wireframe: wireframeState, wireframeLinewidth: 2 } );
        let mesh = new THREE.Mesh( geometry, material );
        mesh.position.x = posx;
        mesh.position.z = posz;
        mesh.position.y = posy;
        mesh.name = name;
        let obj = scene.getObjectByName('name');
        scene.add(mesh);   
    }

    if(type==='Box'){
        let geometry = new THREE.BoxGeometry( width, height, depth );
        let material = new THREE.MeshBasicMaterial( { color: color, wireframe: wireframeState, wireframeLinewidth: 2 } );
        let mesh = new THREE.Mesh( geometry, material );
        mesh.position.x = posx;
        mesh.position.z = posz;
        mesh.position.y = posy;
        mesh.name = name;
        scene.add(mesh);
    }
}

Pyramix.AnimatePredefinedGeometry = function(object){
    onRenderFcts.push(function(){
        scene.getObjectByName(object).rotation.x += 0;
        scene.getObjectByName(object).rotation.y += 0.1;
        scene.getObjectByName(object).rotation.z += 0;
    })
}

Pyramix.GenerateCustomGeometry = function(aVertex, aFaces, ime, color, posx, posy, posz)
{
    //KVADRAT
    let customGeom = new THREE.Geometry();

    for(i=0;i<aVertex.length;i++)
    customGeom.vertices.push(aVertex[i]);

    for(i=0;i<aFaces.length;i++)
        customGeom.faces.push(aFaces[i])
        customGeom.computeFaceNormals();
	    customGeom.computeVertexNormals();
    let customMesh = new THREE.Mesh( customGeom, new THREE.MeshBasicMaterial({color: color, side: THREE.DoubleSide, wireframe: false}) );
    scene.add(customMesh);
    customMesh.position.set(posx,posy,posz);
    customMesh.name = ime;   

    //označacanje tačaka
    editGeometry = scene.getObjectByName('trougao').geometry;

    geometry = new THREE.Geometry();

    sprite = THREE.ImageUtils.loadTexture( "textures/sprite/particle.png" );

    for ( i = 0; i < editGeometry.vertices.length; i ++ ) {

        geometry.vertices.push(editGeometry.vertices[i]);

    }

    material = new THREE.PointCloudMaterial( { size: 5, sizeAttenuation: false, map: sprite, transparent: true } );
    material.color.setHSL( 1.0, 0.3, 0.7 );

    particles = new THREE.PointCloud( geometry, material );
    particles.sortParticles = true;
    scene.add( particles );
}



