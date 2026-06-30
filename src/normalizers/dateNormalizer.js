function normalizeDate(date) {
    if (!date) return "";

    return new Date(date).toISOString().split("T")[0];
}

module.exports = normalizeDate;