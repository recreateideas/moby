const childProcess = require('child_process');

const _runCommandWithOptions = command => (options) => {
    const output = childProcess.execSync(`${command} ${options} --format '{{json .}}'`).toString();
    const joint = output.replace(/\n/gm, ',').replace(/,$/, '');
    return JSON.parse(`[${joint}]`);
};

const listContainers = (all) => {
    const command = 'docker ps';
    const options = all ? ' -a' : '';
    return _runCommandWithOptions(command)(options);
};

const listImages = (all) => {
    const command = 'docker image ls';
    const options = all ? ' -a' : '';
    return _runCommandWithOptions(command)(options);
};

const inspectContainer = name => JSON.parse(childProcess.execSync(`docker container inspect ${name}`).toString());

module.exports = {
    inspectContainer,
    listContainers,
    listImages,
};
