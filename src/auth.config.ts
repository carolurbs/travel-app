import{AuthConfig} from 'angular-oauth2-oidc'

export const authConfig:AuthConfig={
    issuer:'https://accounts.google.com',
    redirectUri:window.location.origin,
    clientId:'668248806457-g8mmir3frl55ok1o0fr425bpfald7eqf.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false,
}