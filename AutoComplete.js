class Auto {
    constructor() {

        /* ================= DATETIME-LOCAL ================= */
        const datetimeInputs = document.querySelectorAll(
            'input[type="datetime-local"]'
        );

        const dt = new Date();
        dt.setDate(dt.getDate() + 1);
        dt.setHours(10, 0, 0, 0); // tomorrow 10:00 AM

        const dtY = dt.getFullYear();
        const dtM = String(dt.getMonth() + 1).padStart(2, "0");
        const dtD = String(dt.getDate()).padStart(2, "0");
        const dtH = String(dt.getHours()).padStart(2, "0");
        const dtMin = String(dt.getMinutes()).padStart(2, "0");

        const defaultDateTime = `${dtY}-${dtM}-${dtD}T${dtH}:${dtMin}`;

        datetimeInputs.forEach(input => {
            if (!input.value) {
                input.value = defaultDateTime;
            }

            input.addEventListener("click", () => {
                input.showPicker?.();
            });
        });

        /* ================= DATE ================= */
        const dateInputs = document.querySelectorAll('input[type="date"]');

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        const dY = tomorrow.getFullYear();
        const dM = String(tomorrow.getMonth() + 1).padStart(2, '0');
        const dD = String(tomorrow.getDate()).padStart(2, '0');
        const tomorrowStr = `${dY}-${dM}-${dD}`;

        dateInputs.forEach(input => {
            if (!input.value) {
                input.value = tomorrowStr;
            }

            input.addEventListener("click", () => {
                input.showPicker?.();
            });
        });
    }
}

// ✨ summon once. ONCE.
new Auto();
