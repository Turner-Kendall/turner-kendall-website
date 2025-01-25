<template>
  <article>

    <header>
      <h3>JSON Web Tokens</h3>
      <p>JSON Web Tokens (<a href="https://jwt.io/introduction">JWTs</a> ) are an open standard
        ( <a href="https://www.rfc-editor.org/info/rfc7519">RFC 7519</a> ) for securely transmitting information between parties as
        a JSON object. They are widely used in authentication and authorization scenarios to ensure secure and efficient
        communication between client and server.
      </p>
    </header>

    <hr>
    <h3 id="key-features-of-jwt">Key Features of JWT:</h3>
    <ul>
      <li><strong>Compact</strong>: JWTs are small in size, making them suitable for transmitting 
        via <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers">HTTP headers</a> .</li>
      <li><strong>Self-contained</strong>: All the information needed for authentication and authorization is stored
        within the token, reducing dependency on backend storage.</li>
      <li><strong>Secure</strong>: They use cryptographic algorithms (e.g., HMAC, RSA) to ensure integrity and
        authenticity.</li>
    </ul>
    
    <hr>

    <h3 id="why-are-jwts-used">Why Are JWTs Used?</h3>
    
    <h4 id="authentication">1. <strong>Authentication</strong>:</h4>
    <p>JWTs can verify the identity of a user by encoding user data and an
       <a href="https://stackoverflow.com/questions/39926104/what-format-is-the-exp-expiration-time-claim-in-a-jwt">expiration timestamp</a>.
        For example, after a user logs in, a JWT can be issued, which the client stores and sends with every subsequent request.</p>
    
    <h4 id="authorization">2. <strong>Authorization</strong>:</h4>
    <p>With a valid JWT, the server can determine a user&#39;s access level and permissions without repeatedly querying
      a database.</p>
    
    <hr>

    <h3 id="how-jwts-enable-stateless-backends">How JWTs Enable Stateless Backends</h3>
    <p>Traditional session-based authentication requires the server to maintain a
       <a href="https://stackoverflow.com/questions/33897276/what-is-the-difference-between-a-session-store-and-database">session store</a>.
       This creates challenges when scaling applications, as sessions must be synchronized across servers. JWTs solve this problem by encoding all 
      the necessary information directly in the token. This eliminates the need for a central session store, making the
       backend stateless.</p>
    
      <h4 id="flow-example">Flow Example:</h4>
    <ol>
      <li><strong>User Login</strong>:<ul>
          <li>User provides credentials.</li>
          <li>Server verifies them and issues a JWT.</li>
        </ul>
      </li>
      <li><strong>Client Stores Token</strong>:<ul>
          <li>The client (e.g., browser or mobile app) stores the token, usually in localStorage or an HTTP-only cookie.
          </li>
        </ul>
      </li>
      <li><strong>Subsequent Requests</strong>:<ul>
          <li>The client includes the JWT in the <code>Authorization</code> header (<code>Bearer &lt;token&gt;</code>).
          </li>
          <li>The server validates the token without needing to access a session database.</li>
        </ul>
      </li>
    </ol>
    
    <hr>

    <h3 id="anatomy-of-a-jwt">Anatomy of a JWT</h3>
    <p>A JWT consists of three parts:</p>
    <ol>
      <li><strong>Header</strong>: Contains metadata about the token, including the signing algorithm.</li>
      <li><strong>Payload</strong>: Includes claims (statements about the user or token) such as:<ul>
          <li>Standard claims (e.g., <code>iss</code>, <code>exp</code>, <code>sub</code>, <code>aud</code>).</li>
          <li>Custom claims (e.g., <code>role</code>, <code>username</code>).</li>
        </ul>
      </li>
      <li><strong>Signature</strong>: Ensures the token has not been tampered with.</li>
    </ol>
    <h4 id="example-jwt">Example JWT:</h4>
    <pre><code class="language-plaintext">Header:
{
  &quot;alg&quot;: &quot;HS256&quot;,
  &quot;typ&quot;: &quot;JWT&quot;
}

Payload:
{
  &quot;sub&quot;: &quot;1234567890&quot;,
  &quot;name&quot;: &quot;John Doe&quot;,
  &quot;iat&quot;: 1516239022
}

Encoded JWT:
&lt;base64url(header)&gt;.&lt;base64url(payload)&gt;.&lt;signature&gt;
</code></pre>
    <hr>
    <h4 id="how-to-protect-jwts-from-being-hijacked">How to Protect JWTs from Being Hijacked</h4>
    <p>While JWTs are secure by design, improper implementation can expose vulnerabilities. Here's how to mitigate
      risks:</p>
    <h4 id="1-use-http-only-cookies">1. <strong>Use HTTP-Only Cookies</strong>:</h4>
    <p>Store JWTs in HTTP-only cookies to prevent them from being accessed by JavaScript, protecting against XSS
      (Cross-Site Scripting) attacks.</p>
    <h4 id="2-secure-communication">2. <strong>Secure Communication</strong>:</h4>
    <p>Always use <a href="https://www.cloudflare.com/learning/ssl/what-is-https/">HTTPS</a> to encrypt the transmission of JWTs, safeguarding against MITM (Man-in-the-Middle) attacks.</p>
    <h4 id="3-set-short-expiration-times">3. <strong>Set Short Expiration Times</strong>:</h4>
    <p>Minimize the validity period of tokens by setting a short <code>exp</code> claim. Combine this with a refresh
      token mechanism for continued access.</p>
    <h4 id="4-validate-signatures">4. <strong>Validate Signatures</strong>:</h4>
    <p>Always verify the signature of incoming JWTs using the server's secret key or public key.</p>
    <h4 id="5-check-issuer-and-audience-claims">5. <strong>Check Issuer and Audience Claims</strong>:</h4>
    <p>Validate the <code>iss</code> (issuer) and <code>aud</code> (audience) claims to ensure the token was issued by a
      trusted party and is intended for your application.</p>
    <h4 id="6-implement-token-rotation">6. <strong>Implement Token Rotation</strong>:</h4>
    <p>Use refresh tokens to periodically issue new access tokens, reducing the impact of compromised tokens.</p>
    <h4 id="7-monitor-and-revoke-compromised-tokens">7. <strong>Monitor and Revoke Compromised Tokens</strong>:</h4>
    <p>Keep a token revocation list or employ a blacklist mechanism to invalidate tokens if suspicious activity is
      detected.</p>
    <h4 id="8-prevent-replay-attacks">8. <strong>Prevent Replay Attacks</strong>:</h4>
    <p>Incorporate a unique identifier ( <a href=""><code>jti</code> claim</a> ) and keep track of used tokens to prevent reuse.</p>
    <hr>
    
    <h3 id="common-mistakes-and-best-practices">Common Mistakes and Best Practices</h3>
    
    <h4 id="mistakes">Mistakes:</h4>
    <ul>
      <li>Storing JWTs in localStorage (susceptible to XSS).</li>
      <li>Not validating the <code>exp</code> claim, allowing expired tokens to be accepted.</li>
      <li>Overloading the payload with sensitive data.</li>
    </ul>

    <h4 id="best-practices">Best Practices:</h4>
    <ul>
      <li>Keep payloads minimal and avoid storing sensitive information.</li>
      <li>Use libraries like <a href="https://github.com/auth0/node-jsonwebtoken">jsonwebtoken</a> for token handling.
      </li>
      <li>Regularly rotate signing keys and use key management services.</li>
    </ul>

    <hr>

    <footer>
      <p>😼</p>
    </footer>

  </article>
</template>