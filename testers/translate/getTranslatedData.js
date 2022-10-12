const { handler } = require("../../handlers/translate/getTranslatedData");
const { writeJSON } = require("../../data/translate");

(async () => {
    const bucketName = "turnoutnow-onboarding";
    const fileContent = await handler(bucketName, "Nitesh/output/711974519606-TranslateText-116c06ef2397e103e72a97a51eb56922/hi.01GF2X08B6SEDR3AG4VW6N2AE9.txt");
    console.log(fileContent);
    writeJSON("../../responses/translation.txt", fileContent);
})();