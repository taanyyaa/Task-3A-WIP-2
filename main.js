const canvas = document.querySelector('.webgl')
// creating a scene
const scene = new THREE.Scene()

// initialising loader
const loader = new THREE.GLTFLoader()
console.log(loader)
loader.load('Elephant3d.glb', function (glb) {
    console.log("success")
    const root = glb.scene
    root.scale.set(2, 2, 2)
    scene.add(root)
}, function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + "% loaded")
}, function (error) {
    console.log("error")
})

// some light for the model
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2, 2, 5)
light.castShadow = true
scene.add(light)

const pointLight = new THREE.PointLight(0xc4c4c4, 10)
pointLight.position.set(0, 300, 500)
scene.add(pointLight)

// camera work here
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 100)
camera.position.set(0, 1, 2)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({
    canvas: canvas

})

// controls to rotate and zoom the model
const controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.addEventListener("change", renderer)

renderer.setSize(innerWidth, innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.gammaOutput = true
renderer.render(scene, camera)

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()

// code for animal details
function customInfo(animal,animalName,x,y,z,ele) {
    let infospot = new PANOLENS.Infospot(
        100,
        "assets/"+animal
    );

    infospot.position.set(x,y,z);
    infospot.addHoverText(animalName, 60);
    infospot.addEventListener("click", function () {
        this.focus();
    });

    ele.add(infospot)
}

// panorama code here
let containerOfEle = [".containerImage", ".containerImage2", ".containerImage3", ".containerImage4"]
var panoObj = []

containerOfEle.map((ele) => {
    const panorama = new PANOLENS.ImagePanorama('Forestpan-2.jpeg');
    panorama.name = "pano" + containerOfEle.indexOf(ele)
    const containerBody = document.querySelector(ele)
    const viewer = new PANOLENS.Viewer({
        container: containerBody
    });
    viewer.add(panorama);
    panoObj.push(panorama)
})


panoObj.map((ele) => {
    if (ele.name === "pano0") {
        customInfo("Flyingsq.png","Malabar Flying Squirrel",200,100,-100,ele)
        customInfo("Cobra.png","King Cobra",-350,-10,-190,ele)
        customInfo("giantsq.png","Malabar Giant Squirrel",390,-100,-100,ele)
        customInfo("LTM.png","Lion Tailed Macaque",-50,-50,-100,ele)
        customInfo("bonnet.png","Bonnet Macaque",50,-50,-100,ele)
        customInfo("langoor.png","Nilgiri Langoor",-300,-100,-100,ele)
        customInfo("parakeet.png","Malabar Parakeet",-400,100,360,ele)
        customInfo("leopard.png","Leopard",-350,10,100,ele)
        customInfo("dove.png","Emerald Dove",-250,100,350,ele)
        customInfo("bulbul.png","Black Bulbul",300,100,100,ele)
        customInfo("Trogon.png","Malabar Trogon",220,-130,100,ele)
        customInfo("clawless.png","Clawless",-100,-30,180,ele)
    }

    else if(ele.name==="pano1"){
        customInfo("whitevulture.png", "White Backed Vulture",-70, -170, -140, ele)
        customInfo("wilddog.png", "Asian Wild Dog", -70, -10, -100, ele)
        customInfo("antelope.png", "Four-Horned Antelope", 140, -10, -80, ele)
        customInfo("leopard.png", "Indian Leopard", -50, -50, -100, ele)
        customInfo("birds.png", "250 Species of Bird", -50, 120, -100, ele)
        customInfo("dung-beetle.png", "Dung Beetle", -490, -10, -100, ele)
        customInfo("hornbill.png", "Great Pied Horbill", -20, 40, -130, ele)
        customInfo("Flycatcher.png", "Nilgiri FlyCatcher", -300, -100, 100, ele)

    }

    else if (ele.name === "pano2") {
        customInfo("hare.png", "Indian Hare", 100, -80, -100, ele)
        customInfo("wildpig.png", "Wild Pig", -120, -30, -100, ele)
        customInfo("bulbul.png", "Grey-Headed Bulbul", 250, -100, -100, ele)
        customInfo("antelope.png", "Spotted Deer", -50, -50, -100, ele)
        customInfo("bonnet.png", "Bonnet Macaque", 50, -50, -100, ele)
        customInfo("bluebird.png", "Blue Winged Parakeet", -150, 80, -250, ele)
        customInfo("LTM.png", "Lion Tailed Macaque", -100, 130, 100, ele)
        customInfo("randombird.png", "Grey-Breasted Laughing Thrush", -300, 80, 10, ele)

    }

    else if (ele.name === "pano3") {
        customInfo("bluebird.png", "Fairy Bluebird", 200, 100, -100, ele)
        customInfo("hornbill.png", "Great Pied Hornbill", -220, 130, -100, ele)
        customInfo("eagle.png", "Black Eagle", 600, 200, -100, ele)
        customInfo("gaur.png", "Gaur", -60, -50, 50, ele)
        customInfo("LTM.png", "Lion Tailed Macaque", -200, -50, -100, ele)
        customInfo("cobra.png", "King Cobra", -230, -90, -200, ele)
        customInfo("leopard.png", "Leopard Cat", -100, -50, 160, ele)
        customInfo("Flyingsq.png", "Giant Flying Squirrel", -250, 100, 100, ele)

    }
})