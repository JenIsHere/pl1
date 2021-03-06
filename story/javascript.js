function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
   center: { lat: 40.684128, lng: -102.028191},
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
// Using https://cloud.google.com/blog/products/maps-platform/how-cluster-map-markers for reference to style the cluster //
const clusterOptions = {
  imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  gridSize: 75,
  zoomOnClick: true,
  maxZoom: 6,
};
const locations = [
  
{ lat: 35.0324, lng: 31.8405},
{ lat: 0.7668, lng: 98.5133},
{ lat: -32.2348, lng: -179.0518},
{ lat: -28.051, lng: -175.5747},
{ lat: 14.3172, lng: -93.4157},
{ lat: -21.1831, lng: -174.1815},
{ lat: -27.8772, lng: -176.3238},
{ lat: -6.5075, lng: 153.6274},
{ lat: -27.8217, lng: -176.3601},
{ lat: -49.8839, lng: 163.1968},
{ lat: -58.5113, lng: -25.3956},
{ lat: 29.6667, lng: 51.7179},
{ lat: -19.2296, lng: -177.678},
{ lat: 33.2937, lng: 94.9122},
{ lat: -20.7208, lng: -175.4662},
{ lat: -7.4707, lng: 128.3101},
{ lat: 38.613, lng: 73.3112},
{ lat: -29.4804, lng: -176.8432},
{ lat: -29.7454, lng: -176.2298},
{ lat: -7.109, lng: 145.9986},
{ lat: -23.0802, lng: 170.4347},
{ lat: 32.6869, lng: 141.774},
{ lat: 28.8616, lng: -43.6394},
{ lat: -40.3215, lng: -74.1225},
{ lat: -40.3381, lng: -74.2712},
{ lat: -31.3306, lng: -68.5308},
{ lat: -7.5493, lng: 127.5443},
{ lat: -20.8299, lng: -175.3351},
{ lat: 31.9577, lng: 104.3423},
{ lat: -29.9048, lng: -71.9961},
{ lat: -20.6601, lng: -175.4481},
{ lat: 36.851, lng: -97.7935},
{ lat: -29.5358, lng: -176.9171},
{ lat: -29.6862, lng: -176.8862},
{ lat: 14.4453, lng: 56.3702},
{ lat: 14.4243, lng: 56.2756},
{ lat: -29.5255, lng: -176.7864},
{ lat: 14.5056, lng: 56.3894},
{ lat: -29.5677, lng: -176.9735},
{ lat: -29.6471, lng: -177.0327},
{ lat: 37.972, lng: 32.0739},
{ lat: 39.1661, lng: 40.1204},
{ lat: -14.9742, lng: -74.0062},
{ lat: 16.8293, lng: -86.1237},
{ lat: 8.1852, lng: -104.251},
{ lat: -10.21, lng: 122.3001},
{ lat: 53.2442, lng: -166.7876},
{ lat: -20.7439, lng: -175.0581},
{ lat: -24.0812, lng: -67.0936},
{ lat: -19.923, lng: -177.4404},
{ lat: -10.1627, lng: 117.423},
{ lat: -32.0938, lng: -111.8029},
{ lat: -4.4405, lng: 144.4012},
{ lat: 53.7408, lng: 161.1058},
{ lat: -33.0594, lng: -179.6306},
{ lat: -23.3305, lng: -64.9063},
{ lat: 15.5817, lng: 118.284},
{ lat: -2.6715, lng: 128.9841},
{ lat: -20.609, lng: -175.5317},
{ lat: 3.8003, lng: 126.8074},
{ lat: -29.6507, lng: -176.5951},
{ lat: 10.9686, lng: -60.9977},
{ lat: -28.155, lng: -67.4906},
{ lat: -29.8508, lng: -177.2141},
{ lat: 53.8054, lng: -164.0669},
{ lat: 53.8797, lng: -164.0614},
{ lat: 53.7894, lng: -164.0271},
{ lat: -29.6633, lng: -176.6341},
{ lat: -29.3155, lng: -176.6452},
{ lat: -29.6608, lng: -176.9055},
{ lat: -29.6316, lng: -176.4856},
{ lat: -29.7775, lng: -176.6215},
{ lat: 13.0505, lng: -88.6847},
{ lat: -29.7927, lng: -176.8112},
{ lat: -29.7553, lng: -176.7022},
{ lat: -29.6247, lng: -176.759},
{ lat: -29.5308, lng: -176.7488},
{ lat: -5.0393, lng: 102.2844},
{ lat: -20.813, lng: -175.4114},
{ lat: 39.1492, lng: 142.3847},
{ lat: -21.6367, lng: -176.478},
{ lat: -58.9726, lng: -25.7788},
{ lat: -59.3185, lng: -25.4108},
{ lat: 36.0855, lng: 70.4709},
{ lat: -61.4438, lng: -37.0094},
{ lat: -18.7824, lng: -69.6263},
{ lat: -17.7352, lng: -177.1923},
{ lat: -12.0752, lng: 112.8863},
{ lat: 5.4909, lng: -82.5881},
{ lat: -24.7241, lng: 179.7909},
{ lat: -56.8013, lng: -26.9915},
{ lat: -18.1204, lng: -177.789},
{ lat: -0.1631, lng: 124.4014},
{ lat: -21.407, lng: -68.5939},
{ lat: 6.1416, lng: 127.0714},
{ lat: 35.1013, lng: 31.9579},
{ lat: 38.2417, lng: 141.6968},
{ lat: -20.6329, lng: -175.4463},
{ lat: -19.1264, lng: -69.3571},
{ lat: -7.9355, lng: 146.7707},
{ lat: -28.882, lng: -176.6122},
{ lat: -8.7448, lng: 108.0816},
{ lat: 18.4262, lng: -73.3898},
{ lat: -6.6866, lng: 120.6265},
{ lat: -20.6757, lng: -175.3475},
{ lat: -19.0681, lng: -176.3494},
{ lat: 3.0969, lng: 127.9481},
{ lat: 60.7031, lng: -44.1073},
{ lat: -32.4246, lng: -68.679},
{ lat: -3.7623, lng: 151.7749},
{ lat: -18.123, lng: -177.7745},
{ lat: -20.5906, lng: -175.3992},
{ lat: 35.9284, lng: 140.4239},
{ lat: -22.775, lng: -68.4971},
{ lat: 1.5201, lng: 126.5777},
{ lat: -63.5138, lng: 169.9041},
{ lat: -19.2329, lng: 168.5554},
{ lat: 4.2674, lng: 128.285},
{ lat: -20.523, lng: -175.2148},
{ lat: 51.9689, lng: 178.2999},
{ lat: 10.0852, lng: -59.5845},
{ lat: -7.2773, lng: 27.9681},
{ lat: 51.9725, lng: 178.2988},
{ lat: 5.3974, lng: 126.4219},
{ lat: -20.442, lng: -175.4183},
{ lat: 18.5511, lng: -72.683},
{ lat: -17.6122, lng: -175.0303},
{ lat: -4.4783, lng: 72.4395},
{ lat: -4.8175, lng: 152.0928},
{ lat: -55.3138, lng: -28.7751},
{ lat: 24.6423, lng: 121.9897},
{ lat: -3.1246, lng: 147.9525},
{ lat: -19.6377, lng: -69.1204},
{ lat: 20.928, lng: -156.082666666667},
{ lat: 27.1411, lng: -44.3477},
{ lat: -29.5997, lng: -176.8628},
{ lat: -15.8805, lng: -173.7812},
{ lat: 9.9142, lng: -59.8871},
{ lat: -55.3588, lng: -28.7401},
{ lat: -0.7517, lng: -13.1422},
{ lat: -20.6853, lng: -175.4588},
{ lat: -2.8564, lng: 129.47},
{ lat: -33.2799, lng: 117.1229},
{ lat: -58.6996, lng: -23.8315},
{ lat: -20.496, lng: -175.4929},
{ lat: -37.2867, lng: 179.852},
{ lat: 3.5687, lng: 126.5317},
{ lat: -11.6557, lng: 166.2144},
{ lat: -7.5345, lng: 127.595},
{ lat: 30.9626, lng: 136.0827},
{ lat: 18.4269, lng: -73.3192},
{ lat: 18.4738, lng: -73.3134},
{ lat: 21.4165, lng: 143.9996},
{ lat: 18.494, lng: -73.2999},
{ lat: 18.4544, lng: -73.323},
{ lat: -33.4765, lng: -179.5298},
{ lat: -20.9105, lng: -175.3289},
{ lat: -31.5359, lng: 179.9901},
{ lat: -21.2593, lng: -68.8572},
{ lat: 53.2788, lng: -166.7935},
{ lat: -20.7667, lng: -175.5363},
{ lat: 36.0702, lng: 69.1575},
{ lat: 28.1105, lng: 142.9478},
{ lat: 52.978, lng: -166.6151},
{ lat: -21.0414, lng: -68.6035},
{ lat: -0.3866, lng: 67.2254},
{ lat: 10.7625, lng: 91.4855},
{ lat: 10.6973, lng: 91.5003},
{ lat: -59.3727, lng: -25.0709},
{ lat: -58.7984, lng: -23.3525},
{ lat: 26.2445, lng: 141.7404},
{ lat: -20.8142, lng: -175.5069},
{ lat: 3.6751, lng: 126.8762},
{ lat: 6.9609, lng: 127.1277},
{ lat: 6.9868, lng: 127.1204},
{ lat: 26.9441, lng: 141.3093},
{ lat: -3.6778, lng: 152.0658},
{ lat: 38.4843, lng: 97.3967},
{ lat: 3.5827, lng: 126.7536},
{ lat: 34.5616, lng: 26.33},
{ lat: 13.7376, lng: 120.8292},
{ lat: -18.9534, lng: 169.3694},
{ lat: -20.4982, lng: -175.3714},
{ lat: 3.6165, lng: 126.6879},
{ lat: -20.6436, lng: -173.3539},
{ lat: -22.7477, lng: -68.481},
{ lat: -22.8174, lng: -68.4723},
{ lat: 39.5667, lng: 28.8303},
{ lat: -5.9458, lng: -12.4727},
{ lat: -44.1132, lng: -82.083},
{ lat: 2.8166, lng: 127.4791},
{ lat: -20.6585, lng: -175.4862},
{ lat: -18.0417, lng: -173.5175},
{ lat: 3.6218, lng: 126.701},
{ lat: -14.5242, lng: -75.5338},
{ lat: 3.6286, lng: 126.6284},
{ lat: -1.7716, lng: -12.9571},
{ lat: 29.3909, lng: 142.3725},
{ lat: 53.2115, lng: -166.8168},
{ lat: 53.3159, lng: -166.7506},
{ lat: -20.7797, lng: -175.3928},
{ lat: -59.4138, lng: -25.894},
{ lat: 3.6951, lng: 126.6747},
{ lat: -21.206, lng: -175.3847},
{ lat: 17.546, lng: 147.0514},
{ lat: 26.7443, lng: -110.874},
{ lat: 7.6146, lng: 126.5685},
{ lat: 32.699, lng: 132.0166},
{ lat: -20.6839, lng: -175.3949},
{ lat: 32.7153, lng: 132.0779},
{ lat: -29.7775, lng: -179.1947},
{ lat: -59.2625, lng: -25.887},
{ lat: 85.3093, lng: 91.181},
{ lat: 32.7084, lng: 131.9951},
{ lat: -33.9061, lng: 179.1303},
{ lat: 32.7437, lng: 132.0432},
{ lat: -27.9021, lng: -176.6568},
{ lat: -20.7823, lng: -175.3815},
{ lat: 6.5248, lng: 126.9375},
{ lat: 23.0823, lng: 93.8207},
{ lat: 12.9071, lng: 144.2017},
{ lat: -20.7481, lng: -175.3195},
{ lat: 60.3208, lng: -152.372},
{ lat: 44.0575, lng: 148.0745},
{ lat: -20.4834, lng: -175.4169},
{ lat: -3.6688, lng: 130.9338},
{ lat: -20.8213, lng: -175.4002},
{ lat: -38.1236, lng: 176.7283},
{ lat: 15.7181, lng: -94.9021},
{ lat: 53.0885, lng: -170.6503},
{ lat: -20.5432, lng: -175.3699},
{ lat: -30.6904, lng: -178.0302},
{ lat: -14.9692, lng: 167.9209},
{ lat: -2.4778, lng: 140.0024},
{ lat: -20.8171, lng: -175.5203},
{ lat: -57.2654, lng: -25.2069},
{ lat: -58.9, lng: -23.9049},
{ lat: -10.2085, lng: -75.4936},
{ lat: 36.5611, lng: 70.9655},
{ lat: -31.8944, lng: 57.5642},
{ lat: -20.7028, lng: -175.3846},
{ lat: 11.2845, lng: -86.923},
{ lat: 34.1908, lng: 51.7924},
{ lat: 50.8775, lng: -179.0932},
{ lat: -20.8485, lng: -175.4097},
{ lat: -3.3257, lng: 137.7045},
{ lat: -37.4117, lng: -74.2157},
{ lat: -20.574, lng: -175.4495},
{ lat: -3.4747, lng: 141.8686},
{ lat: 31.435, lng: 142.1304},
{ lat: -20.7147, lng: -175.4907},
{ lat: 13.2258, lng: 119.6494},
{ lat: -4.5546, lng: 124.0364},
{ lat: -3.6024, lng: 130.452},
{ lat: -3.5339, lng: 131.0149},
{ lat: -7.77, lng: 118.4432},
{ lat: -20.5917, lng: -175.3746},
{ lat: -3.5158, lng: 130.8974},
{ lat: -20.564, lng: -175.3449},
{ lat: -20.5827, lng: -175.3163},
{ lat: 30.5084, lng: 50.6501},
{ lat: -52.5133, lng: 12.9174},
{ lat: -20.6282, lng: -175.6985},
{ lat: 5.4009, lng: -72.5531},
{ lat: -20.4401, lng: -175.3146},
{ lat: 10.9914, lng: -62.3114},
{ lat: -20.8442, lng: -175.3193},
{ lat: 60.7379, lng: -43.9572},
{ lat: 53.7972, lng: 160.5779},
{ lat: -32.6848, lng: -176.9353},
{ lat: -20.8291, lng: -175.3305},
{ lat: -20.6214, lng: -175.3924},
{ lat: -20.9053, lng: -175.4456},
{ lat: -20.9345, lng: -175.3681},
{ lat: -20.4833, lng: -175.3586},
{ lat: 21.2532, lng: 122.007},
{ lat: -63.1832, lng: -160.5146},
{ lat: -20.6508, lng: -175.6063},
{ lat: -20.7979, lng: -175.4352},
{ lat: -57.3948, lng: 147.7926},
{ lat: -20.5181, lng: -175.7874},
{ lat: -20.6843, lng: -175.3304},
{ lat: -5.6212, lng: 146.2083},
{ lat: -5.6535, lng: 148.8981},
{ lat: 26.7104, lng: -14.3502},
{ lat: 29.1934, lng: 142.081},
{ lat: -18.5721, lng: -176.5011},
{ lat: -20.6174, lng: -175.6148},
{ lat: -20.4401, lng: -175.3281},
{ lat: -20.7433, lng: -175.4879},
{ lat: 0.9958, lng: 124.3034},
{ lat: 47.3048, lng: 142.4527},
{ lat: 6.0273, lng: 126.3354},
{ lat: 15.4508, lng: -95.6013},
{ lat: -7.7677, lng: 127.8492},
{ lat: 39.0468, lng: 35.9025},
{ lat: 29.2819, lng: 94.1513},
{ lat: -57.3929, lng: -23.888},
{ lat: -24.0458, lng: -115.3664},
{ lat: -21.0729, lng: -175.353},
{ lat: -4.3065, lng: 129.6084},
{ lat: -20.8249, lng: -175.3476},
{ lat: -32.1259, lng: -179.4854},
{ lat: -20.7853, lng: -175.3956},
{ lat: -26.7875, lng: -176.4386},
{ lat: 44.7951, lng: 95.096},
{ lat: -55.3501, lng: -30.2446},
{ lat: -20.6595, lng: -175.4744},
{ lat: 34.946, lng: 63.5797},
{ lat: 34.8854, lng: 63.6704},
{ lat: -17.9575, lng: -73.4001},
{ lat: -29.9755, lng: -72.098},
{ lat: 85.0306, lng: 91.3197},
{ lat: 85.2572, lng: 91.2836},
{ lat: -6.9094, lng: 106.0807},
{ lat: -7.5539, lng: 105.8746},
{ lat: 16.0347, lng: -95.6864},
{ lat: 40.1168, lng: 24.4688},
{ lat: -49.9576, lng: 114.3915},
{ lat: -5.3399, lng: 147.0038},
{ lat: -21.4629, lng: -176.1951},
{ lat: -20.8698, lng: -175.5542},
{ lat: -20.7658, lng: -175.4622},
{ lat: -17.4165, lng: -174.1211},
{ lat: -6.4459, lng: 154.8206},
{ lat: 40.0695, lng: 24.3299},
{ lat: 40.0353, lng: 24.3694},
{ lat: -20.6055, lng: -175.5324},
{ lat: -20.5775, lng: -175.5921},
{ lat: 24.1908, lng: 122.2624},
{ lat: 3.4987, lng: 96.5659},
{ lat: -20.62, lng: -175.3892},
{ lat: -13.3098, lng: 167.129},
{ lat: 29.1535, lng: 50.246},
{ lat: -20.8229, lng: -175.4376},
{ lat: 29.2011, lng: 50.3087},
{ lat: -20.8784, lng: -175.4558},
{ lat: -20.7603, lng: -175.4893},
{ lat: -60.0472, lng: -27.9688},
{ lat: 13.4734, lng: 144.5439},
{ lat: -31.0502, lng: -71.6696},
{ lat: -57.9882, lng: -25.8434},
{ lat: -16.1588, lng: -173.7742},
{ lat: -55.3793, lng: -128.41},
{ lat: -58.0492, lng: -23.7713},
{ lat: 43.1251, lng: 146.1146},
{ lat: 30.4033, lng: 57.3352},
{ lat: 60.7465, lng: -44.0829},
{ lat: 12.9789, lng: -89.1586},
{ lat: -59.9236, lng: -26.3716},
{ lat: -7.0961, lng: 105.0679},
{ lat: -20.8605, lng: -175.4865},
{ lat: -20.546, lng: -175.39},
{ lat: -20.8152, lng: -175.5665},
{ lat: -20.8057, lng: -175.4527},
{ lat: -38.0002, lng: 179.4505},
{ lat: -6.8384, lng: 105.3569},
{ lat: -7.1047, lng: 104.9492},
{ lat: 38.3175, lng: 141.6627},
{ lat: -5.1972, lng: 146.3069},
{ lat: 52.4725, lng: -168.0466},
{ lat: -22.0678, lng: -174.3614},
{ lat: -7.1191, lng: 105.2777},
{ lat: -7.8729, lng: 118.609},
{ lat: 36.568, lng: 71.5044},
{ lat: -28.2815, lng: -176.7216},
{ lat: 57.4626, lng: -136.4024},
{ lat: 28.0842, lng: 142.8437},
{ lat: -7.5142, lng: 128.588},
{ lat: -7.0742, lng: 105.1787},
{ lat: -6.9291, lng: 105.2513},
{ lat: -22.2582, lng: 170.4785},
{ lat: -31.2415, lng: -178.3058},
{ lat: -7.7941, lng: 118.5495},
{ lat: -20.4601, lng: -175.4932},
{ lat: 9.8532, lng: -84.6374},
{ lat: -7.3084, lng: 127.545},
{ lat: -26.8459, lng: -71.1731},
{ lat: -5.3426, lng: 151.7246},
{ lat: -28.5356, lng: 62.3715},
{ lat: -32.234, lng: -178.3098},
{ lat: 34.6373, lng: 97.9393},
{ lat: -8.4057, lng: 118.0713},
{ lat: 1.4819, lng: 122.9829},
{ lat: -1.5261, lng: 127.3379},
{ lat: 31.0209, lng: 131.4771},
{ lat: 51.2353, lng: -179.201},
{ lat: -23.1503, lng: -114.5323},
{ lat: 51.4299, lng: -179.9503},
{ lat: -37.9138, lng: -74.0588},
{ lat: 25.1943, lng: 93.9958},
{ lat: -24.3882, lng: -179.9985},
{ lat: 0.8023, lng: 123.7153},
{ lat: -28.225, lng: -177.5907},
{ lat: 30.5344, lng: 131.1016},
{ lat: 52.3711, lng: -167.9118},
{ lat: -6.5982, lng: 147.3301},
{ lat: 37.7165, lng: 101.5096},
{ lat: 37.7788, lng: 101.3498},
{ lat: -39.3287, lng: 174.5158},
{ lat: 37.6825, lng: 101.4046},
{ lat: -56.2958, lng: -27.5103},
{ lat: -58.7046, lng: -25.2567},
{ lat: 36.4748, lng: 70.5251},
{ lat: -3.3549, lng: 128.9032},
{ lat: -32.8793, lng: -179.1754},
{ lat: 52.4576, lng: -167.4694},
{ lat: 52.078, lng: 178.0392},
{ lat: 52.3944, lng: -167.9534},
{ lat: -8.0082, lng: 122.3146},
{ lat: 25.4644, lng: 62.4473},
{ lat: 27.0759, lng: 141.3581},
{ lat: 52.3505, lng: -167.906},
{ lat: 40.8728, lng: 21.4935},
{ lat: 52.5431, lng: -167.8811},
{ lat: 40.8528, lng: 21.4046},
{ lat: 52.436, lng: -168.0892},
{ lat: -15.6891, lng: -173.102},
{ lat: 52.4355, lng: -168.2619},
{ lat: 52.4891, lng: -168.108},
{ lat: 52.6548, lng: -168.0527},
{ lat: 52.6047, lng: -168.155},
{ lat: 52.5601, lng: -168.0878},
{ lat: -24.1645, lng: -67.2984},
{ lat: 52.4009, lng: -167.9292},
{ lat: 52.5015, lng: -168.02},
{ lat: 52.6563, lng: -167.9169},
{ lat: 25.0029, lng: -109.7836},
{ lat: 53.0058, lng: -171.4565},
{ lat: 3.7495, lng: -31.5061},
{ lat: -20.6621, lng: -173.9181},
{ lat: 24.6434, lng: 125.8476},
{ lat: 1.3856, lng: 126.9357},
{ lat: -57.9656, lng: -25.5949},
{ lat: 18.4683, lng: -73.5532},
{ lat: 18.4277, lng: -73.5406},
{ lat: 58.6498, lng: -152.4695},
{ lat: 52.7508, lng: 159.8016},
{ lat: -59.3511, lng: -25.634},
{ lat: 35.1456, lng: 31.9095},
{ lat: 0.1519, lng: 96.71},
{ lat: 2.6243, lng: 128.9595},
{ lat: 28.343, lng: -43.5883},
{ lat: 28.5052, lng: -43.6506},
{ lat: 28.3554, lng: -43.7769},
{ lat: -17.4585, lng: -178.6322},
{ lat: -25.0442, lng: 179.8704},
{ lat: -22.6278, lng: -174.9111},
{ lat: -56.0504, lng: -26.6483},
{ lat: 35.5266, lng: 44.9264},
{ lat: -33.5603, lng: 179.6777},
{ lat: 37.4051, lng: 20.3878},
{ lat: -33.9788, lng: 179.5776},
{ lat: -33.8497, lng: 179.78},
{ lat: -14.8128, lng: 168.0575},
{ lat: -33.9223, lng: 179.2159},
{ lat: -18.0849, lng: -178.2169},
{ lat: -24.7796, lng: -176.0645},
{ lat: -26.0926, lng: -65.4096},
{ lat: -30.7939, lng: -71.4586},
{ lat: -33.7985, lng: 179.5056},
{ lat: -4.7535, lng: 153.1413},
{ lat: -33.8095, lng: 179.6489},
{ lat: -19.8711, lng: -178.0448},
{ lat: -33.8864, lng: 179.7142},
{ lat: -33.7504, lng: 179.5715},
{ lat: -33.8116, lng: 179.7888},
{ lat: -33.8185, lng: 179.7827},
{ lat: -33.7522, lng: 179.8989},
{ lat: -33.7958, lng: 179.5444},
{ lat: 2.7814, lng: 128.5213},
{ lat: -33.8014, lng: 179.5333},
{ lat: 47.0908, lng: 155.6652},
{ lat: 1.4888, lng: 127.8667},
{ lat: 40.9116, lng: 21.3813},
{ lat: 40.8416, lng: 21.3763},
{ lat: -32.8845, lng: -179.0206},
{ lat: 1.4118, lng: 127.8455},
{ lat: -33.5041, lng: -179.2732},
{ lat: -23.5624, lng: -176.3649},
{ lat: 11.9822, lng: -87.1375},
{ lat: -23.357, lng: 179.7662},
{ lat: -23.916, lng: -179.7053},
{ lat: -7.0726, lng: 129.2677},
{ lat: -4.7711, lng: 153.3772},
{ lat: 0.3215, lng: 122.0556},
{ lat: -7.1771, lng: 152.5799},
{ lat: 24.7185, lng: -109.0818},
{ lat: 38.6317, lng: 73.7473},
{ lat: -47.2259, lng: -9.7544},
{ lat: -58.815, lng: -24.9718},
{ lat: 14.3321, lng: 146.0348},
{ lat: -4.8536, lng: 133.7813},
{ lat: -52.4221, lng: 28.079},
{ lat: 34.3335, lng: 24.2913},
{ lat: 5.7328, lng: 126.9785},
{ lat: 1.4233, lng: 127.9637},
{ lat: -30.3315, lng: -177.554},
{ lat: 60.4183, lng: -140.486},
{ lat: 37.7706, lng: 101.3456},
{ lat: -26.6739, lng: -71.1667},
{ lat: -26.668, lng: -71.3539},
{ lat: 6.221, lng: 126.505},
{ lat: 19.0207, lng: 119.6134},
{ lat: 13.9048, lng: 144.7869},
{ lat: -3.6943, lng: 68.4041},
{ lat: -3.5256, lng: 68.4857},
{ lat: 28.3243, lng: 142.9234},
{ lat: 24.2599, lng: 120.7759},
{ lat: -4.3541, lng: 153.4302},
{ lat: 37.7343, lng: 101.127},
{ lat: 37.8017, lng: 101.2447},
{ lat: 11.9724, lng: -87.1553},
{ lat: -14.0198, lng: 34.7583},
{ lat: -59.0061, lng: -24.6057},
{ lat: -33.5773, lng: 77.6993},
{ lat: -11.874, lng: -76.5811},
{ lat: -30.1881, lng: -177.4894},
{ lat: -17.5277, lng: -69.6855},
{ lat: -30.2707, lng: -177.5837},
{ lat: -37.6525, lng: -75.1287},
{ lat: -59.0084, lng: -24.8863},
{ lat: -16.1379, lng: -172.9804},
{ lat: 13.1884, lng: 50.9694},
{ lat: 13.3185, lng: 50.9276},
{ lat: -19.2219, lng: -177.3751},
{ lat: 27.445, lng: 128.6252},
{ lat: -9.2268, lng: 113.2424},
{ lat: 15.7919, lng: -93.2087},
{ lat: -22.4992, lng: -67.7992},
{ lat: 11.9218, lng: -87.2169},
{ lat: -58.7365, lng: -25.2413},
{ lat: 11.9368, lng: -87.1387},
{ lat: -7.2724, lng: 105.0869},
{ lat: -24.5624, lng: -176.9687},
{ lat: -2.1267, lng: 138.2713},
{ lat: -59.6767, lng: -26.3882},
{ lat: -5.4111, lng: 152.3608},
{ lat: -5.5193, lng: 152.1909},
{ lat: -5.3485, lng: 152.2115},
{ lat: -20.3159, lng: 168.8933},
{ lat: 40.3846667, lng: -124.8643333},
{ lat: -20.3209, lng: 168.7935},
{ lat: 37.3338333, lng: -117.9023333},
{ lat: -57.9843, lng: -25.5359},
{ lat: -65.3437, lng: -71.5089},
{ lat: -59.7547, lng: -26.3231},
{ lat: -32.3207, lng: -174.9087},
{ lat: -0.8054, lng: -24.7111},
{ lat: 54.2823, lng: 168.9688},
{ lat: -11.5589, lng: 166.4968},
{ lat: -30.4517, lng: -177.4975},
{ lat: -6.0265, lng: 149.5608},
{ lat: -18.9797, lng: 169.6122},
{ lat: -59.6061, lng: -25.9175},
{ lat: 23.8974, lng: 122.5201},
{ lat: -20.1713, lng: 168.814},
{ lat: -5.4009, lng: 152.2675},
{ lat: 27.8527, lng: 100.5876},
{ lat: 56.0178, lng: 164.9692},
{ lat: 56.0736, lng: 164.8399},
{ lat: 36.1445, lng: 31.2928},
{ lat: -17.8803, lng: 168.3876},
{ lat: 76.2296, lng: 125.0553},
{ lat: -4.8065, lng: 125.0808},
{ lat: 28.1549, lng: 141.3165},
{ lat: -20.4468, lng: 169.7135},
{ lat: -6.3593, lng: 154.5131},
{ lat: -15.3548, lng: -176.6565},
{ lat: -57.7846, lng: -25.6035},
{ lat: 11.9077, lng: 93.6061},
{ lat: 48.3011, lng: 146.3417},
{ lat: -37.6273, lng: 177.4473},
{ lat: -7.0385, lng: 127.7416},
{ lat: 18.3519, lng: 147.2509},
{ lat: 37.7085, lng: 141.5249},
{ lat: -17.8058, lng: -176.897},
{ lat: 43.4249, lng: 82.2728},
{ lat: 35.281, lng: -35.2491},
{ lat: 46.2236, lng: 152.769},
{ lat: -20.6525, lng: -176.5624},
{ lat: 13.0711, lng: 93.0237},
{ lat: -64.8299, lng: 177.7639},
{ lat: 24.026, lng: 122.1898},
];
