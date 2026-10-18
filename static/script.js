document.getElementById("generateBtn").addEventListener("click", function () {

    const recipient =
        document.getElementById("recipient").value.trim();

    const occasion =
        document.getElementById("occasion").value.trim();

    const interests =
        document.getElementById("interests").value.trim();

    const budget =
        document.getElementById("budget").value.trim();

    const relationship =
        document.getElementById("relationship").value.trim();

    if (
        recipient === "" ||
        occasion === "" ||
        interests === "" ||
        budget === "" ||
        relationship === ""
    ) {
        alert("Please fill in all the fields.");
        return;
    }

    const button =
        document.getElementById("generateBtn");

    const results =
        document.getElementById("giftResults");

    button.disabled = true;
    button.textContent = "🎁 Finding gift ideas...";

    results.innerHTML =
        "<p>🤖 AI is thinking about the perfect gifts...</p>";

    fetch("/generate-gifts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            recipient: recipient,
            occasion: occasion,
            interests: interests,
            budget: budget,
            relationship: relationship
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("AI request failed.");
        }

        return response.json();
    })
    .then(data => {

        let gifts = data.gifts || "";

        gifts = gifts.replace(/\\n/g, "<br>");
        gifts = gifts.replace(/\n/g, "<br>");
        gifts = gifts.replace(/\\/g, "");

        results.innerHTML =
            gifts;
    })
    .catch(error => {

        console.error(error);

        results.innerHTML =
            "<p>❌ Unable to generate gift ideas. Please try again.</p>";
    })
    .finally(() => {

        button.disabled = false;
        button.textContent = "🎁 Find Gift Ideas";
    });

});