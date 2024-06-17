const messages = {
    200: {
        text: "Get Some!",
    },
};

exports.getText = (statusCode) => {
    return messages[statusCode];
};