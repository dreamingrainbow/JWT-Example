const { generateKeyPair, createSign, createVerify } = require("crypto");
generateKeyPair(
  "rsa",
  {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
      //cipher: "aes-256-cbc", //Optional
      //passphrase: "top secret", //Optional
    },
  },
  (err, publicKey, privateKey) => {
    // Handle errors and use the generated key pair.
    if (err) console.log("Error!", err);
    console.log("Example One: No Passphrase");
    console.log("Keys Generated, create token");
    var jwt = require("jsonwebtoken");
    console.log("Define the Issuer.");
    var i = "dreamingrainbow";
    var s = "admin@dreamingrainbow.com";
    var a = "https://dreamingrainbow.com";
    console.log("Define the Signing Options.");
    var signOptions = {
      issuer: i,
      subject: s,
      audience: a,
      expiresIn: "30d", // 30 days validity
      algorithm: "RS256",
    };
    var payload = {
      foo: "bar",
      f: "b",
      o: {
        0: "a",
        o: "r",
      },
    };
    var token = jwt.sign(payload, privateKey, signOptions);

    toBeVerified = {
      complete: true,
    };
    var decoded = jwt.verify(token, publicKey, toBeVerified);

    console.log(decoded);
  }
);

var passphrase = "top secret";
generateKeyPair(
  "rsa",
  {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: "pkcs1",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs1",
      format: "pem",
      cipher: "aes-256-cbc", //Optional
      passphrase,
    },
  },
  (err, publicKey, privateKey) => {
    // Handle errors and use the generated key pair.
    if (err) console.log("Error!", err);
    console.log("Example Two: With Passphrase");
    console.log("Keys Generated, create token");
    var jwt = require("jsonwebtoken");
    console.log("Define the Issuer.");
    var i = "dreamingrainbow";
    var s = "admin@dreamingrainbow.com";
    var a = "https://dreamingrainbow.com";
    console.log("Define the Signing Options.");
    var signOptions = {
      issuer: i,
      subject: s,
      audience: a,
      expiresIn: "30d", // 30 days validity
      algorithm: "RS256",
    };
    var payload = {
      foo: "bar",
      f: "b",
      o: {
        0: "a",
        o: "r",
      },
    };
    var token = jwt.sign(payload, { key: privateKey, passphrase }, signOptions);

    toBeVerified = {
      complete: true,
    };
    var decoded = jwt.verify(token, publicKey, toBeVerified);

    console.log(decoded);
  }
);
