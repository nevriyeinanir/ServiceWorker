// Inside vue.config.js
module.exports = {
 
  pwa: {
    name: 'comp',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
   
      swSrc: 'src/service-worker.js',
   
    }
  }
}