
(function (c) {
  "use strict";

  // For keeping track of counters

  c.counters = {};

  /**
   * Count
   *
   * Will increment the counter for the specified title
   * and output immidiately.
   *
   * @param {String} title
   */

  c.count = function (title) {
    title = title || ''
    c.counters[title] = c.counters[title] || 0;
    c.counters[title]++;
    return c.log(title + ': ' + c.counters[title]);
  }

})(console);

