import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { HATAGENPEI_RESULTS, HatagenpeiResult, resultKey } from './hatagenpei-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  /** サイコロに表示する目の一覧。 */
  readonly diceFaces = [1, 2, 3, 4, 5, 6];
  /** 現在選ばれている1投目。 */
  readonly firstRoll = signal<number | null>(null);
  /** 現在選ばれている2投目。 */
  readonly secondRoll = signal<number | null>(null);
  /** 両方の目が選ばれた時だけ結果を返す。 */
  readonly selectedResult = computed<HatagenpeiResult | null>(() => {
    const first = this.firstRoll();
    const second = this.secondRoll();
    return first === null || second === null ? null : HATAGENPEI_RESULTS[resultKey(first, second)];
  });

  /** 指定した投目のサイコロを選択する。 */
  selectRoll(rollNumber: 1 | 2, face: number): void {
    if (rollNumber === 1) {
      this.firstRoll.set(face);
      return;
    }
    this.secondRoll.set(face);
  }

  /** 選択中のサイコロと結果を初期状態へ戻す。 */
  clear(): void {
    this.firstRoll.set(null);
    this.secondRoll.set(null);
  }
}