const { ipcRenderer } = window.require('electron');

const openViewInNewWindow = (view) => {
    ipcRenderer.send('new-view', view);
};

const saveContentToFile = (path, content, convert) => {
    const payload = { path, content, convert };
    ipcRenderer.send('save-to-file', payload);
};

export {
    saveContentToFile,
    openViewInNewWindow,
};
