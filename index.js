var xslt4node = require('xslt4node');

var config = {
    xsltPath: 'stylesheet.xsl',
    sourcePath: 'input.xml',
    result: 'output.xml',
    props: {
        indent: 'yes'
    }
};

xslt4node.transform(config, function (err) {
    if (err) console.log(err);
});
