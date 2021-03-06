function init() {
	var scene = new THREE.Scene();
	var box = getBox(1, 1, 1);
	scene.add(box);

	var camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth/window.innerHeight,
		1,
		1000
	);

	// camera.position.x = 1;
	// camera.position.y = 2;
	// camera.position.z = 5;
	camera.position.set(1,2,5);

	camera.lookAt(new THREE.Vector3(0, 0, 0));

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.render(
		scene,
		camera 
	);

	document.getElementById('webgl').appendChild(renderer.domElement);
}

function getBox(w, h, d) {
	var geometry = new THREE.BoxGeometry(w, h, d);
	var material = new THREE.MeshBasicMaterial({
		color: 0x00ff00
	});
	var mesh = new THREE.Mesh(
		geometry,
		material 
	);
	return mesh;
}

init();