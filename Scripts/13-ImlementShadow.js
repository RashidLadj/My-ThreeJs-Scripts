function init() {
	var scene = new THREE.Scene();
	var gui = new dat.GUI();

	var enableFog = false;
	if (enableFog) {
		scene.fog = new THREE.FogExp2(0xffffff, 0.2);
	}
	
	var box = getBox(1, 1, 1);
	var plane = getPlane(20);
	var pointLight = getPointLight(1, '#ffffff');
	var sphere = getSphere(0.05);

	plane.name = 'plane-1';

	box.position.y = box.geometry.parameters.height/2;
	plane.rotation.x = Math.PI/2;
	pointLight.position.set( 0, 2, 0 );
	pointLight.intensity = 0.05;

	scene.add(box);
	scene.add(plane);
	pointLight.add(sphere);
	scene.add(pointLight);

	gui.add(pointLight, 'intensity', 0, 1);
	gui.addColor(pointLight, 'color');
	gui.add(pointLight.position, 'x', -5, 5);
	gui.add(pointLight.position, 'y', -5, 5);
	gui.add(pointLight.position, 'z', -5, 5);

	var camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth/window.innerHeight,
		1,
		1000
	);

	camera.position.set(1,2,5);

	camera.lookAt(new THREE.Vector3(0, 0, 0));

	var renderer = new THREE.WebGLRenderer();
	renderer.shadowMap.enabled = true;
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor('rgb(120, 120, 120)');

	var controls = new THREE.OrbitControls(camera, renderer.domElement);

	update(renderer, scene, camera, controls);

	document.getElementById('webgl').appendChild(renderer.domElement);
}

function getBox(w, h, d) {
	var geometry = new THREE.BoxGeometry(w, h, d);
	var material = new THREE.MeshPhongMaterial({
		color: 'rgb(120, 120, 120)'
	});
	var mesh = new THREE.Mesh(
		geometry,
		material 
	);
	mesh.castShadow = true;

	return mesh;
}

function getPlane(size) {
	var geometry = new THREE.PlaneGeometry(size, size);
	var material = new THREE.MeshPhongMaterial({
		color: 'rgb(120, 120, 120)',
		side: THREE.DoubleSide
	});
	var mesh = new THREE.Mesh(
		geometry,
		material 
	);
	mesh.receiveShadow = true;
	
	return mesh;
}

function getSphere(size) {
	var geometry = new THREE.SphereGeometry(size, 24, 24);
	var material = new THREE.MeshBasicMaterial({
		color: 'rgb(255, 255, 255)'
	});
	var mesh = new THREE.Mesh(
		geometry,
		material 
	);

	return mesh;
}

function getPointLight(intensity, color) {
	var light = new THREE.PointLight(color, intensity);
	light.castShadow = true;
	return light;
}

function update(renderer, scene, camera, controls) {
	renderer.render(
		scene,
		camera
	);

	// required if controls.enableDamping or controls.autoRotate are set to true
	//  controls.update();

	requestAnimationFrame(function() {
		update(renderer, scene, camera, controls);
	})
}

init();