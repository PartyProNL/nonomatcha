import {createStorefrontApiClient} from "@shopify/storefront-api-client";

export const shopifyClient = createStorefrontApiClient({
    storeDomain: 'https://nono-matcha.myshopify.com',
    apiVersion: '2026-01',
    publicAccessToken: '44ad36414241e67413ee40a2043e838f',
});
