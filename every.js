import _curry2 from './internal/_curry2';

/**
 * Array的every封装
 */
export default _curry2((fn, list)=>list.every(fn));
