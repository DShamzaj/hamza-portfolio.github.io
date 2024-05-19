'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "27cf7ac3a9e2a292f72fc563974dd887",
"index.html": "d949e37d94dbcc1941b706da47d7953f",
"/": "d949e37d94dbcc1941b706da47d7953f",
"favicon.jpeg": "59117f7dbd5aa3d9917dfad317d0d2d3",
"main.dart.js": "ef960462422e3f78e4989bff5578d5bc",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "102a9e1be5ca79eef48ee7d7f7fe6ac9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f49959cc832b21bd56f90d80aa2084c3",
"assets/AssetManifest.json": "3424d06c342d7bdc583420a961ee58b9",
"assets/NOTICES": "c6d03112808c492ea703afc9301fdfc4",
"assets/FontManifest.json": "d5c53906b6d86d304b23aa61eec71815",
"assets/AssetManifest.bin.json": "fdbbc362c91d4dd71519d8bac340dd31",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "6d327bfb389bd5f0d38238f1a9a82859",
"assets/fonts/MaterialIcons-Regular.otf": "1442b48378bc2cc7a5826f3c53539cf5",
"assets/assets/error.json": "2d2812a5c894cd762e84eb32f2e5b987",
"assets/assets/loading.json": "049e07779cd4c2bf1d1727c81e3818d2",
"assets/assets/images/1_CsJ05WEGfunYMLGfsT2sXA.gif": "0ac274e561067ee9d830b19fb13dac5c",
"assets/assets/images/IMG_1429.jpeg": "3fc83642b37738ef5642f9b35b350621",
"assets/assets/images/file%2520cover%2520-%25206.png": "dc20e4219190da0cbc2bc0c71da095cd",
"assets/assets/images/Login%2520Page%2520UI%2520starter%2520kit%2520(Community).png": "ca610de4a8d984d36ae1605151a1dd38",
"assets/assets/images/1%252056.png": "58a4aa845fca5bfe88ab5724c03f395b",
"assets/assets/images/appstore.png": "4c594f799b43f5132f050f549339e042",
"assets/assets/images/3a3b8085-c4dd-4d66-8cc4-44ecf28bce0a-cover.png": "fcaef15ac1fe9cfeaaa9e4b8b455cc43",
"assets/assets/images/palystore.png": "41605b54ad6f14a6c49948fa4847322f",
"assets/assets/images/1692905523112.jpg": "88b3e48843243efc74b6dcf71964d7dc",
"assets/assets/images/Slide-1.jpg": "28ddcad1e33ff4bbcc30bd1dcb6f6844",
"assets/assets/images/e555e354-3844-423d-a4cf-1461cf120b15-cover.png": "75462f831c1f4f1e40348dd55b6d0247",
"assets/assets/images/Figma%2520Thumbnail.png": "c9b4536b18593d3e2943948700bea102",
"assets/assets/images/UMT_Logo.png": "cb981cb891b95cd7433686e65962a197",
"assets/assets/images/vfairs-logo-landscape-gradient.png": "f67c011b6c1d7902e8c72871a6d182d8",
"assets/assets/tahir/app_icon_hamza.png": "4362f0942ec3d024726cd00632ae2e52",
"assets/assets/icons/mobile-development.png": "0764a6445b112ed0d6291ace9d082344",
"assets/assets/icons/machine-learning.png": "d6c4c5165d26de770164833925186f1e",
"assets/assets/icons/instagram.png": "72a4b561233cbeed9b490e76dd57af83",
"assets/assets/icons/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/icons/deep-learning.png": "621a91fccb73044f87e66644c89ae81a",
"assets/assets/icons/medium.png": "5b8f9a7e45527abc9993c381e5718d04",
"assets/assets/icons/fiverr.png": "e853108ac4890ff2e86a6bacfabeb0f3",
"assets/assets/icons/menu.png": "7777bd0a549e245607ebc0cad73cb093",
"assets/assets/icons/linkedin.png": "dbce0cfd7ae44f852e206c24bb8c4318",
"assets/assets/icons/facebook.png": "7c8d991e8a2be6abd4986c3e00c35aec",
"assets/assets/profile_loading.json": "74af3f43005e5de2cce1061afe13bd54",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/loading_11.json": "5b939dd90fc6e4bd97171024740d1716",
"assets/assets/another/app_icon_another.png": "25e33057a6112d8baca06361e62942aa",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
