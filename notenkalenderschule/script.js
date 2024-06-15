document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById("calendar");
    const months = [
        "Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];

    for (let month = 0; month < 12; month++) {
        const daysInMonth = new Date(2023, month + 1, 0).getDate();
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement("div");
            dayDiv.className = "day";
            if (day === 1) {
                dayDiv.classList.add("first-day");
            }
            dayDiv.innerHTML = `<span>${day} ${months[month]}</span>
                                <div class="note">
                                    <input type="text" placeholder="Note eintragen">
                                    <button>X</button>
                                </div>`;
            calendar.appendChild(dayDiv);

            // Zugriff auf das Eingabefeld und den Button
            const input = dayDiv.querySelector("input");
            const button = dayDiv.querySelector("button");

            // Event-Listener für das Eingabefeld, um den Rahmen zu ändern
            input.addEventListener("input", function() {
                if (input.value.trim() !== "") {
                    dayDiv.classList.add("note-entered");
                } else {
                    dayDiv.classList.remove("note-entered");
                }
            });

            // Event-Listener für den Button zum Löschen der Note
            button.addEventListener("click", function() {
                input.value = "";
                input.focus(); // Fokussiert das Eingabefeld nach dem Löschen
                dayDiv.classList.remove("note-entered"); // Entfernt die Kennzeichnung
            });
        }
    }
});
