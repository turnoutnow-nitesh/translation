const { getStatus } = require("../../data/translate");

exports.handler = async () => {
    const region = "us-east-1";
    const params = {
        JobId: "ee9b36bb1b2ae2186833fcea30814f5b",
    };
    try {
        const translateResponse = await getStatus(region, params);
        return translateResponse.TextTranslationJobProperties;
    } catch (err) {
        console.log(err);
    }
}
