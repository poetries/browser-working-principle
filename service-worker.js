/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "002257f0ea0c8067ef6429da994db596"
  },
  {
    "url": "assets/css/0.styles.abf1b240.css",
    "revision": "536c34da968dabc987a536ae03da9ba6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5fdcce22.js",
    "revision": "3fc26da31ebfab4de3e029cc0e4d1393"
  },
  {
    "url": "assets/js/11.9b0defc1.js",
    "revision": "f30382d4006d6cd60b818c46813d9c96"
  },
  {
    "url": "assets/js/12.df92789f.js",
    "revision": "f7074c418ada319d812264d4ede829cf"
  },
  {
    "url": "assets/js/13.ec41e30b.js",
    "revision": "e983c41b28cc17e7fdfea7f2e26236a1"
  },
  {
    "url": "assets/js/14.ee30ca0e.js",
    "revision": "e69338e598aecbedfa25726919263fa5"
  },
  {
    "url": "assets/js/15.41188598.js",
    "revision": "58a2ec27ae02b39244c24da543a39f18"
  },
  {
    "url": "assets/js/16.00952ad3.js",
    "revision": "c307f63b901e56052cbd808b765b1da0"
  },
  {
    "url": "assets/js/17.642e9988.js",
    "revision": "f610d13a9089def5a25026480f1ca10e"
  },
  {
    "url": "assets/js/18.4f6dec8c.js",
    "revision": "99a4b712eb6d9912a5e72716c74e6dc6"
  },
  {
    "url": "assets/js/19.3730e533.js",
    "revision": "92051fce81bb506ade3657b0cd96fbda"
  },
  {
    "url": "assets/js/20.1b841154.js",
    "revision": "52ab3df9bb5873f8d46e99b67b4b6201"
  },
  {
    "url": "assets/js/21.ecc57b88.js",
    "revision": "10a4ec6f23d94fc89621e524a64d0aaf"
  },
  {
    "url": "assets/js/22.f5851623.js",
    "revision": "84d695a7dd2ec32b3c7abae3794f7c48"
  },
  {
    "url": "assets/js/23.8a2f7f89.js",
    "revision": "1b4ca771bef304973618f272140f6d60"
  },
  {
    "url": "assets/js/24.4921ba1f.js",
    "revision": "3c39846c92949a358a21d12a805f21d5"
  },
  {
    "url": "assets/js/26.427bf57e.js",
    "revision": "15bc01a606a9d749fa96e3f889ee912a"
  },
  {
    "url": "assets/js/27.6aeca3f6.js",
    "revision": "0ab5744f13156fcf048faad7cc22ccad"
  },
  {
    "url": "assets/js/28.9495cfe3.js",
    "revision": "7ad7a0c55c1126c8fc16dc2990519265"
  },
  {
    "url": "assets/js/29.58bf969b.js",
    "revision": "0777ed9110c436cbbfa6bf91f287a1b7"
  },
  {
    "url": "assets/js/3.36474bcb.js",
    "revision": "8534323afcb9ffa58f699451242accf8"
  },
  {
    "url": "assets/js/30.895b5b40.js",
    "revision": "cf2da81f5da73b4ac462bed0a0001af6"
  },
  {
    "url": "assets/js/31.3886fb94.js",
    "revision": "44e7a7b9234cd582c2b49d5df03b2184"
  },
  {
    "url": "assets/js/32.3052f6d3.js",
    "revision": "1102a649f91fe231e8b78ad6749f7cf8"
  },
  {
    "url": "assets/js/33.b3b498dc.js",
    "revision": "139fef03fcc208982ea90f3d6e3d27d5"
  },
  {
    "url": "assets/js/34.1ebde9e4.js",
    "revision": "f216d988ab4325d4a8a2119e56f6b3d1"
  },
  {
    "url": "assets/js/35.b18928be.js",
    "revision": "2e30cedabc6fd4e108c62ec88a0b167f"
  },
  {
    "url": "assets/js/36.0e78bdd1.js",
    "revision": "c39083d44acca679749f97e9c0e63cab"
  },
  {
    "url": "assets/js/37.4ae2676e.js",
    "revision": "263b012467f6bb06188843b08deea9d3"
  },
  {
    "url": "assets/js/38.f5483a4c.js",
    "revision": "547026b07e43cd5813a380fa203446d3"
  },
  {
    "url": "assets/js/39.92d6f3e3.js",
    "revision": "ee68366800ea1e8916021488b1fff4ab"
  },
  {
    "url": "assets/js/4.0066e57a.js",
    "revision": "daea4139d04f190556d4b73773f05d01"
  },
  {
    "url": "assets/js/40.a3523c09.js",
    "revision": "c77f68261f81cef587f723e9559d3344"
  },
  {
    "url": "assets/js/41.86a3f918.js",
    "revision": "25fb8fae701de61e378964b5a144210e"
  },
  {
    "url": "assets/js/42.59103eb0.js",
    "revision": "83b1a83e191c00d3151541c4148396de"
  },
  {
    "url": "assets/js/43.6498d334.js",
    "revision": "81638dbb6d0c5c50ea599eeb5c2743b6"
  },
  {
    "url": "assets/js/44.4889d227.js",
    "revision": "df5e0350a597e27d6889ec744d81e862"
  },
  {
    "url": "assets/js/45.d39d294d.js",
    "revision": "72abc169186e518226d019fed8ccf39c"
  },
  {
    "url": "assets/js/46.bf85246b.js",
    "revision": "81d7bdba4881a8c3210faa6bb5f4b8f3"
  },
  {
    "url": "assets/js/47.050971c6.js",
    "revision": "ac99a26074c00aab3a2834e9be291e26"
  },
  {
    "url": "assets/js/48.29d1f671.js",
    "revision": "ef26a6d7071697eed336133285901137"
  },
  {
    "url": "assets/js/49.652ed272.js",
    "revision": "98f28b7ccef5af276a9b9e5d0db36dec"
  },
  {
    "url": "assets/js/5.af863734.js",
    "revision": "59d5c51f332000428861e59454b90f23"
  },
  {
    "url": "assets/js/50.ba5af959.js",
    "revision": "dc6dee6dec2eab34058bf96de0c7a670"
  },
  {
    "url": "assets/js/51.a048f31f.js",
    "revision": "74fc50981993b3c630ee5e6e42d98045"
  },
  {
    "url": "assets/js/52.1789fc09.js",
    "revision": "aa8ea2b64fd2232ef76bea2c321ffd37"
  },
  {
    "url": "assets/js/6.06489044.js",
    "revision": "1448f4eb12bbed263649f1d4d2ca483c"
  },
  {
    "url": "assets/js/7.a72c4819.js",
    "revision": "e71ecd0295446e4ad5e0614b7a3a0cbf"
  },
  {
    "url": "assets/js/8.37e64cb4.js",
    "revision": "8cd868d3ffff7ad2d65924cfb9941e1e"
  },
  {
    "url": "assets/js/9.71e70e8f.js",
    "revision": "c7c13e5ff2d721ccdba8c3cea79dcb0d"
  },
  {
    "url": "assets/js/app.ea712473.js",
    "revision": "fb4f4d15ba44c7df7ee36d4175adcaaf"
  },
  {
    "url": "assets/js/vendors~notification.66175131.js",
    "revision": "c700f632cfd9ae2609d81f2dff7fa08d"
  },
  {
    "url": "guide/index.html",
    "revision": "230f1eb1d8b20312d8577ffc54e30238"
  },
  {
    "url": "guide/part1/lesson01.html",
    "revision": "fecaa2bb9320ef2f9aa9b8d8e70548b6"
  },
  {
    "url": "guide/part1/lesson02.html",
    "revision": "dfda401972030e517f7f7834e8bd9f9c"
  },
  {
    "url": "guide/part1/lesson03.html",
    "revision": "c56c69ca27d048c60fadd1490d97ac6a"
  },
  {
    "url": "guide/part1/lesson04.html",
    "revision": "f8ef433ec0fb4a3aafa67bd12203f34e"
  },
  {
    "url": "guide/part1/lesson05.html",
    "revision": "39022354d751db26706ec04a37eaf023"
  },
  {
    "url": "guide/part1/lesson06.html",
    "revision": "770508a2572ccdf9d4b45efc48317433"
  },
  {
    "url": "guide/part2/lesson07.html",
    "revision": "402a3b231fbd0d5aa84d6e27309fa400"
  },
  {
    "url": "guide/part2/lesson08.html",
    "revision": "8a9c79d774abca9dce7ca79303230717"
  },
  {
    "url": "guide/part2/lesson09.html",
    "revision": "6852bcbbe495db539b2255da2cc13ec4"
  },
  {
    "url": "guide/part2/lesson11.html",
    "revision": "7c9fa252d716421be2d78e4c5523ea01"
  },
  {
    "url": "guide/part3/lesson12.html",
    "revision": "77f571f9c53085ca4f26a62eb8b0b652"
  },
  {
    "url": "guide/part3/lesson13.html",
    "revision": "8c442df712703d8d9e4442f433242dc7"
  },
  {
    "url": "guide/part3/lesson14.html",
    "revision": "90ab1405152351e344fa7676f7cf60f1"
  },
  {
    "url": "guide/part4/lesson15.html",
    "revision": "1ffd2925253cd6560646806bbb52aad6"
  },
  {
    "url": "guide/part4/lesson16.html",
    "revision": "44ca0500aa00e37ab2cc3f1a27ca087f"
  },
  {
    "url": "guide/part4/lesson17.html",
    "revision": "bbcab9103cf9d6df879a1d14cde9197c"
  },
  {
    "url": "guide/part4/lesson18.html",
    "revision": "f083b8f283666f6cfda09f5872fd4f15"
  },
  {
    "url": "guide/part4/lesson19.html",
    "revision": "acfe60d6b4eaeddd51544d262b6c5768"
  },
  {
    "url": "guide/part4/lesson20.html",
    "revision": "1a5585f6cdff8fbb21e466433b1ac65a"
  },
  {
    "url": "guide/part5/lesson21.html",
    "revision": "3fd2dc7f9d50c16fec1ac6fd733bb614"
  },
  {
    "url": "guide/part5/lesson22.html",
    "revision": "48016758d8c03a0618a3dc7705552243"
  },
  {
    "url": "guide/part5/lesson23.html",
    "revision": "0e7a1015b2eb1a0094967bbf99c47566"
  },
  {
    "url": "guide/part5/lesson24.html",
    "revision": "f8ee57a7dd9e18bd3526cd904080234f"
  },
  {
    "url": "guide/part5/lesson25.html",
    "revision": "213520291ce94180884b4d530b166821"
  },
  {
    "url": "guide/part5/lesson26.html",
    "revision": "313e121dab06c2e1215b3e7874a959ed"
  },
  {
    "url": "guide/part5/lesson27.html",
    "revision": "b4077e083fb8d747db9088ded82df7ce"
  },
  {
    "url": "guide/part5/lesson28.html",
    "revision": "ca1bb66f843179eb78a1c3e69f460598"
  },
  {
    "url": "guide/part6/lesson29.html",
    "revision": "71fe614e86dc4afb4faede9db05ecc01"
  },
  {
    "url": "guide/part6/lesson30.html",
    "revision": "9b8f4d3b9a5074b7b564e74128969224"
  },
  {
    "url": "guide/part6/lesson31.html",
    "revision": "b4d0dc44026fa5740f0fe3b29670dc5d"
  },
  {
    "url": "guide/part6/lesson32.html",
    "revision": "8c02e25204c2820e3555bb35a7ff48f6"
  },
  {
    "url": "guide/part6/lesson33.html",
    "revision": "5385c402b67c3b935bcb2dce16970feb"
  },
  {
    "url": "guide/part6/lesson34.html",
    "revision": "0e96082290ffa26cfd286aaf76cb0261"
  },
  {
    "url": "guide/part6/lesson35.html",
    "revision": "d61c680d8b34b8d5d021c104b25b6037"
  },
  {
    "url": "guide/part6/lesson36.html",
    "revision": "8d19b94440e067da9b3ec5f2a5f787c8"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "b061a6b211553ef7401151abcd494dd2"
  },
  {
    "url": "logo.png",
    "revision": "736ab2ad735e2b92e0b74ba0ca36ca7a"
  },
  {
    "url": "logo.svg",
    "revision": "193a730d0b1344fdbbbcd2c9cd733edc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
