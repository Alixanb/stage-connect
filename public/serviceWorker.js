// Nom du cache
const CACHE_NAME = "connect-stage-cache-v1";

// Liste des ressources à mettre en cache
const urlsToCache = [
  "/",
  "/index.html",
  "/src/index.css",
  "/src/main.tsx",
  "/favicon.svg",
  "/header-image.jpg",
  "/manifest.json",
  "/logo192.png",
  "/logo512.png",
];

// Installation du service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache ouvert");
      return cache.addAll(urlsToCache);
    })
  );
});

// Récupération des ressources
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Si la ressource est en cache, on la retourne
      if (response) {
        return response;
      }

      // Sinon, on fait une requête réseau
      return fetch(event.request).then((response) => {
        // On ne met en cache que les réponses valides
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // On clone la réponse car elle ne peut être consommée qu'une fois
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

// Nettoyage des anciens caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
