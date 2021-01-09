import Settings from './settings/index.js';
import Calculations from './entry/index.js';

addEventListener("load", (function (e) {
    "serviceWorker" in navigator && navigator.serviceWorker.register("serviceWorker.js");

    // Creating New Instances of settings and calculations
    new Settings();
    new Calculations();
}));
