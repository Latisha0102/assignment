const cacheName='news-v1';
const staticAssets =[
 './',
 './app.js',
 './Assignment.css',
 './Assignment.html',
 './manifest.webmanifest',
 

];

self.addEventListener('install',async e=>{
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate',e=>{
    self.clients.claim();
});

self.addEventListener("fetch", function (event) {});