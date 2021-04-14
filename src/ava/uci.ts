import test from 'ava';
import { str2uci } from '../uci';
import * as side from '../side';

test('uci', t => {

  t.deepEqual(str2uci('e2e4'), { orig: [5,2], dest: [5,4], promotion: undefined });

  t.deepEqual(str2uci('a1h8=Q'), { orig: [1,1], dest: [8,8], promotion: 'q' });

  t.deepEqual(str2uci('o-o'), side.ShortCastle);
  
});
