function init() {
	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth/window.innerHeight,
		1,
		1000
	);

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.render(
		scene,
		camera 
	);

	document.getElementById('webgl').appendChild(renderer.domElement);
}

init();