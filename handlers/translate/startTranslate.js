const { startTranslation, uploadS3Object } = require("../../data/translate");

exports.handler = async () => {

    // Upload a new file onto S3 bucket
    (async () => {
        await uploadS3Object();
    })();

    const region = "us-east-1";
    const params = {
        JobName: "translate",
        DataAccessRoleArn: "arn:aws:iam::711974519606:role/translate-batch-role",
        InputDataConfig: {
            ContentType: "text/plain",
            S3Uri: "s3://turnoutnow-onboarding/Nitesh/input"
        },
        OutputDataConfig: {
            S3Uri: "s3://turnoutnow-onboarding/Nitesh/output"
        },
        SourceLanguageCode: "en",
        TargetLanguageCodes: ["hi"]
    };
    try {
        const translateResponse = await startTranslation(region, params);
        return translateResponse;
    } catch (err) {
        console.log(err);
    }
}

