//  Fake private key for Trivy secret demo
const PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBALDEMOCKKEYEXAMPLEENDPRIVATEKEY";

console.log("Trivy secret detection demo running...");

document.addEventListener("DOMContentLoaded", () => {
  const btnInfo = document.getElementById("show-info");
  const info = document.getElementById("info");

  btnInfo.addEventListener("click", () => {
    info.classList.toggle("hidden");
  });

  // Simple console message for demo
  console.log("Trivy demo app loaded. Remember to run `trivy fs .` from terminal to scan this folder.");
});
