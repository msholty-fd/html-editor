const AWS = require('aws-sdk');
const s3Options = require(`${process.env.HOME}/.aws/credentials.json`);
AWS.config.update(s3Options);
const S3 = new AWS.S3();
const fs = require('fs');
const git = require('git-rev');
const path = require('path');
const s3 = require('s3');
const client = s3.createClient({ s3Options });
const bucket = 'boomerang-tester';
const source = `dist`;
const destination = `gs://${bucket}/`;
const fileStream = fs.createReadStream('./dist/index.html');
const uploadParams = { 
  Bucket: bucket,
  Key: path.basename('./dist/index.html'),
  Body: fileStream,
  ACL: 'public-read',
  ContentType: 'text/html',
};

S3.upload (uploadParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } if (data) {
    console.log("Upload Success", data.Location);
  }
});

// See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property
// for AWS putObject documentation on valid keys
git.short(function(sha1) {    
  const appUploader = client.uploadDir({
    localDir: 'dist',
    deleteRemoved: true,
    s3Params: {
      ACL: 'public-read',
      Bucket: bucket,
      Prefix: sha1,
      CacheControl: 'max-age=31557600',
    },
  });

  appUploader.on('error', function(err) {
    console.error("unable to sync:", err.stack);
  });
  appUploader.on('progress', function() {
    console.log(
      'progress: ',
      appUploader.progressAmount
    );
  });
  appUploader.on('end', function() {
    console.log("done uploading app files");
  });
});