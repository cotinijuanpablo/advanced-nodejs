const fs = require('fs');
//Requiring and working with https instead of https is Pretty similar
//I need to pass options to the create server
//key and certificate, buffer or stream to represent private key and a certificate
//i can use a pfx to combine them also
const server = require('https')
  .createServer({
    //If I comment these two lines (key and cert) I get a
    /**
    This site can’t provide a secure connection
    localhost uses an unsupported protocol.
    ERR_SSL_VERSION_OR_CIPHER_MISMATCH
     */
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),  //to generate the certificate i can use the OpenSSL tool, I need help with this.
      //https://docs.microsoft.com/en-us/powershell/module/pkiclient/new-selfsignedcertificate?view=win10-ps
      //https://medium.com/the-new-control-plane/generating-self-signed-certificates-on-windows-7812a600c2d8
      //https://www.feistyduck.com/library/openssl-cookbook/online/ch-openssl.html
      //req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -nodes
        //THIS!
        //-x509 In cryptography is a standard defining the format of public key certificates
        //new key to generate key
        //RSA-2048 is a encryption algorithm 
        //key.pem is the output file
        //out is to out put
        //cert.pem is the output file
        //-nodes?
  });

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('Hello world\n');
});

//Default port for https communication
server.listen(443);

//HTTPs is the HTTP protocol over TSL/SSL
//SSL and TLS are both cryptographic protocols that provide authentication and data encryption
//Secure Sockets Layer (SSL) is a cryptographic protocol that enables secure communications over the Internet.
//Transport Layer Security (TLS) is the successor to SSL
//https://youtu.be/SJJmoDZ3il8


//https://localhost/
//Take note in the 's' and that the browser says that the vertificate is not trusted, since its self signed.