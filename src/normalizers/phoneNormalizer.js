function normalizePhone(phone = "") {
    if (!phone) return "";

    // Remove everything except digits
    let cleaned = phone.replace(/\D/g, "");

    // Add India country code if missing
    if (cleaned.length === 10) {
        cleaned = "91" + cleaned;
    }

    return "+" + cleaned;
}

module.exports = normalizePhone;