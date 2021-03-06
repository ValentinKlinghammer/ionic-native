import { Plugin, Cordova } from './plugin';

/**
 * @name Instagram
 * @description Share a photo with the instagram app
 *
 * @usage
 * ```
 * import {Instagram} from 'ionic-native';
 *
 * Instagram.share('data:image/png;uhduhf3hfif33', 'Caption')
 *   .then(() => console.log('Shared!'))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
@Plugin({
  pluginName: 'Instagram',
  plugin: 'cordova-instagram-plugin',
  pluginRef: 'Instagram',
  repo: 'https://github.com/vstirbu/InstagramPlugin'
})
export class Instagram {

  /**
   * Detect if the Instagram application is installed on the device.
   *
   * @return {Promise<boolean|string>} Returns a promise that returns a boolean value if installed, or the app version on android
   */
  @Cordova({
    callbackStyle: 'node'
  })
  static isInstalled(): Promise<boolean|string> { return; }

  /**
   * Share an image on Instagram
   * Note: Instagram app stopped accepting pre-filled captions on both iOS and Android. As a work-around, the caption is copied to the clipboard. You have to inform your users to paste the caption.
   *
   * @param canvasIdOrDataUrl The canvas element id or the dataURL of the image to share
   * @param caption The caption of the image
   * @return {Promise<any>} Returns a promise that resolves if the image was shared
   */
  @Cordova({
    callbackStyle: 'node'
  })
  static share(canvasIdOrDataUrl: string, caption?: string): Promise<any> { return; }

  /**
   * Share a library asset or video
   * @param assetLocalIdentifier A local fileURI
   * @return {Promise<any>} Returns a promise that resolves if the image was shared
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  static shareAsset(assetLocalIdentifier: string): Promise<any> { return; }

}
