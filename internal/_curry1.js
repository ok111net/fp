import _isPlaceholder from './_isPlaceholder';


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
export default fn=>function f1(...args) {
  if (args.length === 0 || _isPlaceholder(args[0])) {
    return f1;
  }
  
  return fn.apply(this, args);
};
