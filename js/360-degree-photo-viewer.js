'use strict';

var viewer = new Marzipano.Viewer(document.getElementById('panorama'));

var source = Marzipano.ImageUrlSource.fromString(
    "images/building.jpg"
);

var geometry = new Marzipano.EquirectGeometry([{
    width: 8192
}]);

var limiter = Marzipano.RectilinearView.limit.traditional(1024, 100 * Math.PI / 180);
var view = new Marzipano.RectilinearView({
    yaw: Math.PI
}, limiter);

var scene = viewer.createScene({
    source: source,
    geometry: geometry,
    view: view,
    pinFirstLevel: true
});

scene.switchTo();