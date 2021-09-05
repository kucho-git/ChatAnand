const moment = require('moment');

function formatMessage(username, text) {
    return {
        username,
        text,
        time: moment().local().format('LT')
    }
}

module.exports = formatMessage;