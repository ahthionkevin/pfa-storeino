const config = require('./current-FR.json');
let translate = { language: 'FR', properties: [] };
for (const key in config) {
    translate.properties.push({
        name: key,
        value: config[key]
    });
}
console.log(JSON.stringify(translate));