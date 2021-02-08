
importScripts("https://cdn.jsdelivr.net/pouchdb/5.3.1/pouchdb.min.js");
// example usage:
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('demo-cache').then(function(cache) {
      return cache.put('/', new Response("From the cache!"));
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || new Response("Nothing in the cache for this request");
    })
  );
});

let resourcesToCache = [
    './',
    './index.html',
    'https://code.jquery.com/jquery-3.3.1.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/pouchdb/6.4.3/pouchdb.min.js',
    './styles/inline.css',
    './scripts/app.js',
  ];
  importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/index.html?homescreen=1',
       '/?homescreen=1',
       '/styles/main.css',
       '/scripts/main.min.js',
       '/sounds/airhorn.mp3'
     ]);
   })
 );
});



app.get('/sw.js', (req, res) => {
  if (__DEVELOPMENT__) {
    http.get('http://localhost:4001/static/build/sw.js', (r) => {
      res.set({
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=0, no-cache, no-store, must-revalidate'
      });
      r.setEncoding('utf8');
      r.pipe(res);
    }).on('error', (e) => {
      console.error(`Error in sending sw.js in dev mode : ${e.message}`);
    });
  } else {
    res.setHeader('Cache-Control', 'max-age=0, no-cache, no-store, must-revalidate');
    res.sendFile('sw.js', { root: path.join(__ROOT_DIRECTORY__, 'assets', 'build') }); // eslint-disable-line no-undef
  }
});