'use strict.js'

var expect = require('chai').expect;

describe('BasicAlgorithmScripting', function(){
    it('should exist', function(){
        var BasicAlgorithmScripting = require('./basicAlgorithmScripting.js');
        expect(BasicAlgorithmScripting).to.not.be.undefined;
    });
});

var BasicAlgorithmScripting = require('./basicAlgorithmScripting.js');

describe('#factorialize', function(){
    it('factorialize(5) should return a number', function(){
        var actual = BasicAlgorithmScripting.factorialize(5);
        expect(actual).to.be.a('number');
    });

    it('factorialize(5) should return 120',function(){
        var expected = 120;
        var actual = BasicAlgorithmScripting.factorialize(5);
        expect(actual).to.be.eql(expected);
    });

    it('factorialize(10) should return 3628800',function(){
        var expected = 3628800;
        var actual = BasicAlgorithmScripting.factorialize(10);
        expect(actual).to.be.eql(expected);
    });

    it('factorialize(20) should return 2432902008176640000',function(){
        var expected = 2432902008176640000;
        var actual = BasicAlgorithmScripting.factorialize(20);
        expect(actual).to.be.eql(expected);
    });

    it('factorialize(0) should return 1',function(){
        var expected = 1;
        var actual = BasicAlgorithmScripting.factorialize(0);
        expect(actual).to.be.eql(expected);
    });

});