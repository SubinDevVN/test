const lastReplyTimes = {};

function onCall({ message }) {
    const { senderID } = message;

    if (lastReplyTimes[senderID] && (Date.now() - lastReplyTimes[senderID] < 60000)) {
        return;
    }

    lastReplyTimes[senderID] = Date.now();
    message.reply("I'm busy");
}

export default {
    onCall
}
