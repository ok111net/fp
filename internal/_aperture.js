import slice from '../var/slice';
export default function _aperture(n, list) {
  let idx = 0;
  const limit = list.length - (n - 1);
  const acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
}
