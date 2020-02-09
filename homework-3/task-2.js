'use strict';

const countProps = function(obj) {
  return Object.values(obj).length;
};

console.log(countProps({}));
