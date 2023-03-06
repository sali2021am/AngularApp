export const environment = {
  production: false,
  keycloak:{
      issuer :"http://localhost:8080/auth/realms/cyber_App2",
      redirectUri:"http://localhost:4200/",
      clientId:"AngularSchoolApp",
      scope:"openid profile email offline_access"
  }
};