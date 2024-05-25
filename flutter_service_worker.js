'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"android-icon-144x144.png": "75befe3aa1c059ec0ca5981f3fa9e047",
"android-icon-192x192.png": "a5a0d9a5c94dd079dd978c297f350d0a",
"android-icon-36x36.png": "67d47c3baab84e38c8a5ec6d4dcb4085",
"android-icon-48x48.png": "94f3028d74e9295fe9834f0fa8cb53f9",
"android-icon-72x72.png": "9d1042107879f7404fe452406eeb3ac2",
"android-icon-96x96.png": "b68bb62135881c55e261828fff1c4889",
"apple-icon-114x114.png": "4203cab1a385b9757e3109d6dc9cda06",
"apple-icon-120x120.png": "8ad4cab5d38dcf0d86593993f5d8662c",
"apple-icon-144x144.png": "75befe3aa1c059ec0ca5981f3fa9e047",
"apple-icon-152x152.png": "03498231771bb25e9977cddd16c43c0c",
"apple-icon-180x180.png": "19a6db1ecd6a2f0edb8bb16d753d1028",
"apple-icon-57x57.png": "5116c257f671f3a1f5d118e0cd7a0425",
"apple-icon-60x60.png": "e028623fb5d617b8cd6c7666ff906084",
"apple-icon-72x72.png": "9d1042107879f7404fe452406eeb3ac2",
"apple-icon-76x76.png": "2e009d717d2617c4d4b398403f449864",
"apple-icon-precomposed.png": "cb433d0f8c0ef0b11763bef14ece0863",
"apple-icon.png": "cb433d0f8c0ef0b11763bef14ece0863",
"assets/AssetManifest.bin": "c97d41f0c169828f3d3b35ca9488ca69",
"assets/AssetManifest.bin.json": "762c1f1f8288b77344cb24af79f1ee8c",
"assets/AssetManifest.json": "ddd86d6160b5db2cf53933b9286f155d",
"assets/assets/beep.wav": "6e366a5327d36cd063296c13cd6f69e2",
"assets/assets/icon/trancer3.png": "246a48206f68d08474fe9d01d9b76895",
"assets/assets/sounds/beep.wav": "6e366a5327d36cd063296c13cd6f69e2",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "1f542145705a057165beb31ce14e80ad",
"assets/images/zendoclogo-min.PNG": "e0bb068615a01e98a8d66dfe54cc48dc",
"assets/NOTICES": "a52eea4f6f8b34d7e88cfa8c8f03229c",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon-16x16.png": "3c4078177b3022778dce899f5a534a64",
"favicon-32x32.png": "66e3c66b0cae58f9a89989ec3b2e5121",
"favicon-96x96.png": "b68bb62135881c55e261828fff1c4889",
"favicon.ico": "bbe8d58dd2b37178d7af3748ceb79023",
"favicon.png": "06778af76f60c49eca7a1679069c8fcb",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ea6c49114879a699a4512631307d88d4",
"icons/Icon-192.png": "c443bf6c5516cb75917881c5ec34cb98",
"icons/Icon-512.png": "c1604783008c99ac99682ab2746ab857",
"icons/Icon-maskable-192.png": "c443bf6c5516cb75917881c5ec34cb98",
"icons/Icon-maskable-512.png": "c1604783008c99ac99682ab2746ab857",
"index.html": "69e79a44326e47f2e3680cfc94667f89",
"/": "69e79a44326e47f2e3680cfc94667f89",
"main.dart.js": "558995f29d661432e4db8747ad259e36",
"manifest.json": "2ed992d6028247289022dee8edfef8f8",
"ms-icon-144x144.png": "75befe3aa1c059ec0ca5981f3fa9e047",
"ms-icon-150x150.png": "6618c6eb431dde610b8b7fad4a60d5e1",
"ms-icon-310x310.png": "066c245cd830423605c24882f77a3ccf",
"ms-icon-70x70.png": "312ceea899a46390416241cb3aa7cd6b",
"trancer3.png": "246a48206f68d08474fe9d01d9b76895",
"version.json": "bca6766b4af896e42fddaca465474350"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
