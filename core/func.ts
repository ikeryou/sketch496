import { ScreenType } from './screenType';
import { Conf } from './conf';

export class Func {
  constructor() {}

  public static ratio(): number {
    return window.devicePixelRatio || 1;
  }

  public static px(num: number): string {
    return num + 'px';
  }

  public static useScreen(): boolean {
    return screen != undefined;
  }

  public static sw(): number {
    return document.body.clientWidth;
    // return window.innerWidth
  }

  public static sh(): number {
    return window.innerHeight;
  }

  public static screenOffsetY(): number {
    if (Func.sw() > window.innerHeight) {
      return 0;
    } else {
      return (window.innerHeight - Func.sh()) * 0.5;
    }
  }

  public static screen(): number {
    if (window.innerWidth <= Conf.BREAKPOINT) {
      return ScreenType.XS;
    } else {
      return ScreenType.LG;
    }
  }

  public static isXS(): boolean {
    return Func.screen() == ScreenType.XS;
  }

  public static isLG(): boolean {
    return Func.screen() == ScreenType.LG;
  }

  public static val(xs: any, lg: any): any {
    if (Func.isXS()) {
      return xs;
    } else {
      return lg;
    }
  }

  public static r(val: number): number {
    const base = Func.val(Conf.XS_PSD_WIDTH, Conf.LG_PSD_WIDTH);
    return (val / base) * Func.sw();
  }

  public static getEdgeWhiteWidth(): number {
    const whiteWidth = Func.val(20 / 375, 30 / 1440) * Func.sw();
    return whiteWidth;
  }

  public static getWhiteWidth(): number {
    const whiteWidth = Func.val(5 / 375, 10 / 1440) * Func.sw();
    return whiteWidth;
  }

  public static getRedWidth(): number {
    const redWidth = Func.val(63 / 375, 129 / 1440) * Func.sw();
    return redWidth;
  }

  public static usePointer(b: boolean): void {
    if (b) {
      document.body.classList.remove(Conf.CSS_NO_POINTER);
    } else {
      document.body.classList.add(Conf.CSS_NO_POINTER);
    }
  }

  public static copyToClipboard(t: string): void {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(t);
    }
  }

  public static sin1(radian:number):number {
    return Math.sin(radian) + Math.sin(2 * radian)
  }

  public static sin2(radian:number):number {
    return (
        Math.sin(radian) +
        Math.sin(2.2 * radian + 5.52) +
        Math.sin(2.9 * radian + 0.93) +
        Math.sin(4.6 * radian + 8.94)
      ) / 4
  }
}
