
require('../');


describe('console.count', function () {

  it ('should increment upon hit', function () {
    console.count();
    console.counters[''].should.equal(1);
    console.count();
    console.counters[''].should.equal(2);
  });

  it ('should be possible to namespace counters', function () {
    console.count('foo');
    console.counters.foo.should.equal(1);
    console.count('bar');
    console.counters.bar.should.equal(1);
  })

});

