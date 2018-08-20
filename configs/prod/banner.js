//====================================================|
// PRODUCTION BANNER


//--------------------------| Import

const pkg = require('../../package.json');


//--------------------------| Body

const banner =
`
 • ${pkg.title || pkg.name} (v${pkg.version})
   ${pkg.homepage}
   Copyright © ${new Date().getFullYear()} Peter Petrov
   
 • Front-end developer:
   ${pkg.author.name}
   ${pkg.author.email}
   ${pkg.author.url}
   
 • Last update: ${new Date().toDateString()}
`;


//--------------------------| Export

module.exports = banner;
