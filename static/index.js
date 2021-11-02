const config = require('./config.json');
for (const tab of config.config.settings.tabs) {
    for (const section of tab.sections) {
        for (const block of section.blocks) {
            for (const value of block.values) {
                console.log(`"${value.path}":"${value.value}"`);
            }
        }
    }
}