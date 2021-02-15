const config = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-tut-file-upload-bucket",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ssnwfru6o2.execute-api.us-east-2.amazonaws.com/dev/",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_BQ4rOdRXf",
    APP_CLIENT_ID: "fmdhevf0oc7d0kfgg5nh3mc1",
    IDENTITY_POOL_ID: "us-east-2:fadf9d95-ca6c-4354-ae2c-2412aa96494e",
  },
};

export default config;

