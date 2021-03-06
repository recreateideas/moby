let inDebounce;
let events = [];
const handleRawEvents = win => (chunk) => {
    const parsed = chunk
        .toString()
        .split(/\n/)
        .filter(item => item)
        .map(item => JSON.parse(item));
    events = events.concat(parsed);
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
        win.webContents.send('new-docker-events', events);
        events = [];
    }, 1000);
};

module.exports = {
    handleRawEvents,
};
