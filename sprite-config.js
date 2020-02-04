const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const SVGSpriter = require('svg-sprite');
const folder = './src/svg';

const config = {
    dest: './src/svg',
    mode: {
        symbol: {
            dest: '',
            sprite: 'spritemap.svg'
        }
    },
    shape: {
        id: {
            generator: (name, file) => {
                return file.basename.split('.').shift();
            },
        },
        transform: [ 'svgo' ],
    },
    svg: {
        namespaceIDs: false,
        xmlDeclaration: false,
        doctypeDeclaration: false,
        namespaceClassnames: false,
        dimensionAttributes: false
    }
};

const spriter = new SVGSpriter(config);

const sprites = fs.readdirSync(folder);
sprites.forEach(sprite => {
    const sprite_path = path.join(folder, sprite);
    spriter.add(sprite_path, sprite, fs.readFileSync(sprite_path, {
        encoding: 'utf-8'
    }));
});

spriter.compile((error, result) => {
    for (let mode in result) {
        for (let resource in result[mode]) {
            mkdirp.sync(path.dirname(result[mode][resource].path));
            fs.writeFileSync(result[mode][resource].path, result[mode][resource].contents);
        }
    }

    if (!error) {
        console.log('Spritemap has been generated');
    }
});


let insertSpritemapTries = 0;

let insertSpritemap = () => {
    insertSpritemapTries++;
    console.log('insertSpritemap try: ' + insertSpritemapTries);
    let spritemap = '';

    fs.readFile('./src/svg/spritemap.svg', 'utf8', function(err, contents) {
        spritemap = contents;
            fs.readFile('./src/components/atoms/SVGLibrary/index.js', 'utf8', function (err,data) {
                if (err) {
                    return console.log(err);
                }

                if (spritemap.length) {
                    var result = data.replace(/\<div id="spritemap"\>(.*?)\<\/div\>/, '<div id="spritemap">' + spritemap + '</div>');

                    fs.writeFile('./src/components/atoms/SVGLibrary/index.js', result, 'utf8', function (err) {
                        if (err) return console.log(err);
                    });
                   
                } else {
                    console.log('Spritemap empty');
                    if (insertSpritemapTries <= 10) {
                        insertSpritemap();
                    }
                }

            });

    });
}

insertSpritemap();