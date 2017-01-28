/* jshint node: true */
'use strict';

var quotes = [
  {
    text: 'As a tech community, we must treat documentation, marketing, logistics, infrastructure, art, etc. work with as much respect as engineering',
    author: 'Yehuda Katz'
  }, {
    text: 'To maximize your impact in software, empower other developers.',
    author: 'Yehuda Katz'
  }
];

module.exports = {
  name: 'ember-empathy',
  preBuild: function() {
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log('');
    console.log('"' + quote.text + '"');
    console.log('  — ' + quote.author);
    console.log('');
  }
};
