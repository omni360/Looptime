/*
	Debug level, future tutorial and game select menu
	With code from http://threejs.org/examples/#misc_controls_pointerlock
 */

function Lobby() {
	THREE.Object3D.call(this)
	// Light
	var pointLight = new THREE.PointLight(0xFFFFFF)
	pointLight.position.x = 10
	pointLight.position.y = 50
	pointLight.position.z = 130
	this.add(pointLight)

	// Sphere
	var sphereMaterial =
	new THREE.MeshLambertMaterial({
		color: 0xCC0000
	})
	var sphere = new THREE.Mesh(
		new THREE.SphereGeometry(50, 16, 16), sphereMaterial)
	sphere.position.z = -300
	this.add(sphere)

	// Floor
	geometry = new THREE.PlaneGeometry( 2000, 2000, 100, 100 );
	geometry.applyMatrix( new THREE.Matrix4().makeRotationX( - Math.PI / 2 ) );
	for ( var i = 0, l = geometry.vertices.length; i < l; i ++ ) {
		var vertex = geometry.vertices[ i ];
		vertex.x += Math.random() * 20 - 10;
		vertex.y += Math.random() * 2;
		vertex.z += Math.random() * 20 - 10;
	}
	for ( var i = 0, l = geometry.faces.length; i < l; i ++ ) {
		var face = geometry.faces[ i ];
		face.vertexColors[ 0 ] = new THREE.Color().setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 )
		face.vertexColors[ 1 ] = new THREE.Color().setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 )
		face.vertexColors[ 2 ] = new THREE.Color().setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 )
	}
	material = new THREE.MeshBasicMaterial( { vertexColors: THREE.VertexColors } )
	mesh = new THREE.Mesh( geometry, material )
	this.add(mesh)

	// Collition test cube
	this.testcube = new THREE.Mesh(new THREE.CubeGeometry(20, 20, 50))
	this.testcube.position.y = 10
	this.testcube.position.x = 30
	this.testcube.material.side = THREE.DoubleSide
	this.add(this.testcube)
}

Lobby.prototype = Object.create(THREE.Object3D.prototype)