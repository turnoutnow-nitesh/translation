const { handler } = require("../../handlers/translate/startTranslate");

(async () => {
    const response = await handler();
    console.log("Translation job created, the details:");
    console.log(response);
})();