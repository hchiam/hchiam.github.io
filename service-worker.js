import { offlineFallback } from "workbox-recipes";
import { NetworkOnly } from "workbox-strategies";
import { setDefaultHandler } from "workbox-routing";

setDefaultHandler(new NetworkOnly());

offlineFallback();
