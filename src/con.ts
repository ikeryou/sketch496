import { Func } from '../core/func';
import { LvhGetter } from '../core/lvhGetter';
import { MyDisplay } from '../core/myDisplay';
import { SvhGetter } from '../core/svhGetter';
import { DisplayConstructor } from '../libs/display';


export class Con extends MyDisplay {

  private _debug: HTMLElement

  constructor(opt: DisplayConstructor) {
    super(opt);

    this._debug = document.createElement('div')
    this._debug.classList.add('l-debug')
    document.body.appendChild(this._debug)
    this._debug.innerHTML = 'DEBUG'
  }


  // 更新
  protected _update(): void {
    super._update();

    const h1 = SvhGetter.instance.val
    const h2 = LvhGetter.instance.val
    const h3 = Func.sh()

    let scrollRate = (h3 - h1) / (h2 - h1)
    if(Number.isNaN(scrollRate) || isNaN(scrollRate)) scrollRate = 0

    this._debug.innerHTML = 'rate: ' + scrollRate

    if(scrollRate > 0.75) {
      document.body.classList.add('-scroll')
    } else {
      document.body.classList.remove('-scroll')
    }
  }
}

