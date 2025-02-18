import { sceneKeys } from './sceneKeys';
import { json, system } from 'index';
import { Map_TPL } from './Map.tpl';
import Mel from '@/assets/characters/static/boss/melcine.png';
import { warp0 } from 'timelineWords/timelineWords';
import {
  restart0,
  restart1,
  restart2,
  II,
  III,
  IV,
  reI,
  reII,
  reIII,
  warpstart,
  explanation3,
  addPouler,
  goMelcine,
  beforeMelcineBattle,
  //afterMelcineBattle,
} from 'timelineWords/timelineWords3';
import { pouler, shiden } from 'friends';

export class Map3 extends Map_TPL {
  constructor() {
    super(json[3], sceneKeys.map3);
  }
  preload() {
    super.preload();
    // super.setnpcimage('Shiden', 1);
    // super.setnpcimage('Pouler', 1);
    super.setnpcimage('Shiden', 1, shiden.spriteSrc);
    super.setnpcimage('Pouler', 1, pouler.spriteSrc);
    this.loadBossimage('Mel', Mel);
  }
  create() {
    super.create();
    this.setBoss(51, 24, 'Mel', 0.25);
    super.setEvent('exit', warp0);
    super.setHint('explanation2', explanation3);
    super.setEvent('add3', addPouler);
    super.setEvent('goMelcine', goMelcine);
    super.setEvent('beforeMelcine', beforeMelcineBattle);
    //super.setEvent('afterMelcine', afterMelcineBattle);
    super.setEvent('restart', restart0);
    super.setEvent('restart1', restart1);
    super.setEvent('restart2', restart2);
    super.setHint('woop', II);
    super.setHint('woop1', III);
    super.setHint('woop2', IV);
    super.setHint('woopto1', reI);
    super.setHint('woop1to2', reII);
    super.setHint('wooptoboss', reIII);
    super.setHint('woopstart', warpstart);

    // イベントの位置を取得
    // const events = this.tileMap?.filterTiles((tile) => {});
  }

  public update(_time: number, delta: number): void {
    super.update(_time, delta);
  }
}
