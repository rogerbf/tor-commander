// "ADD_ONION" SP KeyType ":" KeyBlob
//             [SP "Flags=" Flag *("," Flag)]
//             1*(SP "Port=" VirtPort ["," Target])
//             *(SP "ClientAuth=" ClientName [":" ClientBlob]) CRLF

// KeyType =
//      "NEW"     / ; The server should generate a key of algorithm KeyBlob
//      "RSA1024"   ; The server should use the 1024 bit RSA key provided
//                    in as KeyBlob
//
//     KeyBlob =
//      "BEST"    / ; The server should generate a key using the "best"
//                    supported algorithm (KeyType == "NEW")
//      "RSA1024" / ; The server should generate a 1024 bit RSA key
//                    (KeyType == "NEW")
//      String      ; A serialized private key (without whitespace)
//
//     Flag =
//      "DiscardPK" / ; The server should not include the newly generated
//                      private key as part of the response.
//      "Detach"    / ; Do not associate the newly created Onion Service
//                      to the current control connection.
//      "BasicAuth" / ; Client authorization is required using the "basic"
//                      method.
//      "NonAnonymous"; Add a non-anonymous Single Onion Service. Tor
//                      checks this flag matches its configured hidden
//                      service anonymity mode.
//
//     VirtPort = The virtual TCP Port for the Onion Service (As in the
//                HiddenServicePort "VIRTPORT" argument).
//
//     Target = The (optional) target for the given VirtPort (As in the
//              optional HiddenServicePort "TARGET" argument).
//
//     ClientName = An identifier 1 to 16 characters long, using only
//                  characters in A-Za-z0-9+-_ (no spaces).
//
//     ClientBlob = Authorization data for the client, in an opaque format
//                  specific to the authorization method.
//
//   The server reply format is:
//     "250-ServiceID=" ServiceID CRLF
//     ["250-PrivateKey=" KeyType ":" KeyBlob CRLF]
//     *("250-ClientAuth=" ClientName ":" ClientBlob CRLF)
//     "250 OK" CRLF
//
//     ServiceID = The Onion Service address without the trailing ".onion"
//                 suffix

export default (configuration = { Flags: [ `Detach` ] }) => {

}
