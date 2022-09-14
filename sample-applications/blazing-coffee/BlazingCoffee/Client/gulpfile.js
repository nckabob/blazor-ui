const { kendoSassBuild } = require('@progress/kendo-theme-tasks');

function buildStyles(done) {
    const themeFile = './Theme/main.scss';

    kendoSassBuild({
        file: themeFile,
        output: {
            path: './wwwroot/css',
            filename: '[name].css'
        },
        implementation: 'node-sass'
    });

    done();
}

exports.sass = buildStyles;
