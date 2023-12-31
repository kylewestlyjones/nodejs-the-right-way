'use strict'

const parseRDF = require('../lib/parse-rdf.js')
const fs = require('fs')
const expect = require('chai').expect
const rdf = fs.readFileSync(`${__dirname}/pg132.rdf`)

describe('parseRDF', () => {
  it('should be a function', () => {
    expect(parseRDF).to.be.a('function')
  })

  it('should parse RDF content', () => {
    const book = parseRDF(rdf)
    expect(book).to.be.an('object')
    expect(book).to.have.a.property('id', 132)
    expect(book).to.have.a.property('title', 'The Art of War')
    expect(book).to.have.a.property('authors').that.is.an('array').with.length(2).and.contains('Giles, Lionel').and.contains('Giles, Lionel')
    expect(book).to.have.a.property('subjects').that.is.an('array').with.length(2).and.contain('Military art and science -- Early works to 1800').and.contains('War -- Early works to 1800')
    expect(book).to.have.a.property('lcc').that.is.a('string').with.length(1).and.equals('U')
  })
})
