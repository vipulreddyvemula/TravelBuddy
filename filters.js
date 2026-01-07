class RideFilter {
    constructor(inputElement, selectElement) {
        this.inputEl = inputElement;
        this.selectEl = selectElement;
    }

    apply(rides) {
        let result = [...rides];

        const input = this.inputEl.value.trim().toLowerCase();
        const sortType = this.selectEl.value;

        /* ------------------ FILTERING ------------------ */
        if (input !== "") {

            // 1️⃣ Seat count
            if (!isNaN(input)) {
                const seats = Number(input);
                result = result.filter(r => Number(r.seats) === seats);
            }

            // 2️⃣ to: PLACE
            else if (input.startsWith("to:")) {
                const place = input.replace("to:", "").trim();
                result = result.filter(r =>
                    r.to?.toLowerCase().includes(place)
                );
            }

            // 3️⃣ from: PLACE
            else if (input.startsWith("from:")) {
                const place = input.replace("from:", "").trim();
                result = result.filter(r =>
                    r.from?.toLowerCase().includes(place)
                );
            }

            // 4️⃣ Generic place (destination first)
            else {
                const destMatches = result.filter(r =>
                    r.to?.toLowerCase().includes(input)
                );

                const sourceMatches = result.filter(r =>
                    r.from?.toLowerCase().includes(input)
                );

                result = [...destMatches, ...sourceMatches];
            }
        }

        /* ------------------ SORTING ------------------ */
        switch (sortType) {
            case "Time Ascending":
                result.sort((a, b) =>
                    new Date(a.departure) - new Date(b.departure)
                );
                break;

            case "Time Descending":
                result.sort((a, b) =>
                    new Date(b.departure) - new Date(a.departure)
                );
                break;

            case "Seats High → Low":
                result.sort((a, b) =>
                    Number(b.seats) - Number(a.seats)
                );
                break;

            case "Seats Low → High":
                result.sort((a, b) =>
                    Number(a.seats) - Number(b.seats)
                );
                break;
        }

        return result;
    }
}

class ErrandFilter {
    constructor(inputElement, selectElement) {
        this.inputEl = inputElement;
        this.selectEl = selectElement;
    }

    apply(errands) {
        let result = [...errands];

        const input = this.inputEl.value.trim().toLowerCase();
        const sortType = this.selectEl.value;

        /* ------------------ FILTERING ------------------ */
        if (input !== "") {
            result = result.filter(e =>
                e.item?.toLowerCase().includes(input)
            );
        }

        /* ------------------ SORTING ------------------ */
        switch (sortType) {
            case "Time Ascending":
                result.sort((a, b) =>
                    a.timestamp.seconds - b.timestamp.seconds
                );
                break;

            case "Time Descending":
                result.sort((a, b) =>
                    b.timestamp.seconds - a.timestamp.seconds
                );
                break;

            case "Name Ascending":
                result.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
                break;

            case "Name Descending":
                result.sort((a, b) =>
                    b.name.localeCompare(a.name)
                );
                break;
        }

        return result;
    }
}

class TrainFilter {
    constructor(inputElement, selectElement) {
        this.inputEl = inputElement;
        this.selectEl = selectElement;
    }

    apply(trains) {
        let result = [...trains];

        const input = this.inputEl.value.trim().toLowerCase();
        const sortType = this.selectEl.value;

        /* ------------------ FILTERING ------------------ */
        if (input !== "") {

            // 1️⃣ Number → train number
            if (!isNaN(input)) {
                result = result.filter(t =>
                    t.trainIdentifier?.startsWith(input)
                );
            }

            // 2️⃣ to: PLACE
            else if (input.startsWith("to:")) {
                const place = input.replace("to:", "").trim();
                result = result.filter(t =>
                    t.to?.toLowerCase().includes(place)
                );
            }

            // 3️⃣ from: PLACE
            else if (input.startsWith("from:")) {
                const place = input.replace("from:", "").trim();
                result = result.filter(t =>
                    t.from?.toLowerCase().includes(place)
                );
            }

            // 4️⃣ Generic string → destination first, then source
            else {
                const destMatches = result.filter(t =>
                    t.to?.toLowerCase().includes(input)
                );

                const sourceMatches = result.filter(t =>
                    t.from?.toLowerCase().includes(input)
                );

                result = [...destMatches, ...sourceMatches];
            }
        }

        /* ------------------ SORTING ------------------ */
        switch (sortType) {
            case "Time Ascending":
                result.sort((a, b) =>
                    new Date(a.departure) - new Date(b.departure)
                );
                break;

            case "Time Descending":
                result.sort((a, b) =>
                    new Date(b.departure) - new Date(a.departure)
                );
                break;

            case "Name Ascending":
                result.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
                break;

            case "Name Descending":
                result.sort((a, b) =>
                    b.name.localeCompare(a.name)
                );
                break;
        }

        return result;
    }
}
