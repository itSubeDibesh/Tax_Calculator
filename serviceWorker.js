const TaxCalculatorPWA = "Tax Calculator"
const assets = [
    "./",
    "./manifest.json",
    "./manifest.webmanifest",
    "./serviceWorker.js",
    "./index.html",

    "./Favicon/favicon-16.png",
    "./Favicon/favicon-20.png",
    "./Favicon/favicon-24.png",
    "./Favicon/favicon-32.png",
    "./Favicon/favicon-48.png",
    "./Favicon/favicon-64.png",
    "./Favicon/favicon-128.png",
    "./Favicon/favicon-256.png",
    "./Favicon/favicon-512.png",
    "./Favicon/favicon.ico",

    "./Assets/scripts/database/index.js",
    "./Assets/scripts/elements/index.js",
    "./Assets/scripts/entry/index.js",
    "./Assets/scripts/settings/index.js",
    "./Assets/scripts/app.js",

    "./Assets/Vendor/bootstrap/css/bootstrap.min.css",
    "./Assets/Vendor/bootstrap/css/bootstrap.min.css.map",
    "./Assets/Vendor/bootstrap/js/bootstrap.min.js",
    "./Assets/Vendor/bootstrap/js/bootstrap.min.js.map",

    "./Assets/Vendor/fontawesom/css/all.min.css",
    "./Assets/Vendor/fontawesom/css/brand.min.css",
    "./Assets/Vendor/fontawesom/css/fontawesom.min.css",
    "./Assets/Vendor/fontawesom/css/regular.min.css",
    "./Assets/Vendor/fontawesom/css/solid.min.css",
    "./Assets/Vendor/fontawesom/css/svg-with-js.min.css",
    "./Assets/Vendor/fontawesom/css/v4-shims.min.css",
    
    "./Assets/Vendor/fontawesom/js/all.min.js",
    "./Assets/Vendor/fontawesom/js/brand.min.js",
    "./Assets/Vendor/fontawesom/js/conflict-detection.min.js",
    "./Assets/Vendor/fontawesom/js/fontawesom.min.js",
    "./Assets/Vendor/fontawesom/js/regular.min.js",
    "./Assets/Vendor/fontawesom/js/solid.min.js",
    "./Assets/Vendor/fontawesom/js/v4-shims.min.js",
    
    "./Assets/Vendor/fontawesom/webfonts/fa-brands-400.eot",
    "./Assets/Vendor/fontawesom/webfonts/fa-brands-400.svg",
    "./Assets/Vendor/fontawesom/webfonts/fa-brands-400.ttf",
    "./Assets/Vendor/fontawesom/webfonts/fa-brands-400.woff",
    "./Assets/Vendor/fontawesom/webfonts/fa-brands-400.woff2",
   
    "./Assets/Vendor/fontawesom/webfonts/fa-regular-400.eot",
    "./Assets/Vendor/fontawesom/webfonts/fa-regular-400.svg",
    "./Assets/Vendor/fontawesom/webfonts/fa-regular-400.ttf",
    "./Assets/Vendor/fontawesom/webfonts/fa-regular-400.woff",
    "./Assets/Vendor/fontawesom/webfonts/fa-regular-400.woff2",
   
    "./Assets/Vendor/fontawesom/webfonts/fa-solid-400.eot",
    "./Assets/Vendor/fontawesom/webfonts/fa-solid-400.svg",
    "./Assets/Vendor/fontawesom/webfonts/fa-solid-400.ttf",
    "./Assets/Vendor/fontawesom/webfonts/fa-solid-400.woff",
    "./Assets/Vendor/fontawesom/webfonts/fa-solid-400.woff2",

    "./Assets/Vendor/jquery/jquery-3.5.1.min.js",
    "./Assets/Vendor/jquery/jquery-3.5.1.min.js.map"
]

// Triggers the install event of application and caches the assets file
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(TaxCalculatorPWA).then(cache => {
            cache.addAll(assets)
        })
    );
})

// Fetch Assets or Update Assets
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})