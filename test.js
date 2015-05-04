var expect = require('chai').expect
  , client = require('./')

describe('client', function() {

  it('should detect running in node', function(){
    expect(client).to.not.be.ok
  })

})