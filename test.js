var expect = require('chai').expect
  , client = require('./')

describe('client', function() {

  /* istanbul ignore next */
  typeof window !== 'undefined' && it('should detect running in browser', function(){
    expect(client).to.be.ok
  })

  typeof window === 'undefined' && it('should detect running in node', function(){
    expect(client).to.not.be.ok
  })

})