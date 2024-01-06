if(Symbol["asyncIterator"] === undefined) ((<any>Symbol)["asyncIterator"]) = Symbol.for("asyncIterator");

export default function <T>(source: Iterable<T>): Iterable<T>;
export default function <T>(source: AsyncIterable<T>): AsyncIterable<T>;
export default function <T>(
  source: AsyncIterable<T> | Iterable<T>):
  AsyncIterable<T> | Iterable<T> {

  if (source[Symbol.asyncIterator]) {
    return {
      [Symbol.asyncIterator]() {
        const it = source[Symbol.asyncIterator]();
        const $return = it.return;
        it.return = function (value) {
          it.next(Symbol.for("terminated"));
          return $return.call(it)
        };
        return it;
      }
    }
  } else if (source[Symbol.iterator]) {
    return {
      [Symbol.iterator]() {
        const it = source[Symbol.iterator]();
        const $return = it.return;
        it.return = function (value) {
          it.next(Symbol.for("terminated"));
          return $return.call(it);
        };
        return it;
      }
    }
  }

  throw Error("source is not iterable!");
}