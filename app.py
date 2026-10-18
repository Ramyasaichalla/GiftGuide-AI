from flask import Flask, render_template, request, jsonify
from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/generate-gifts", methods=["POST"])
def generate_gifts():

    data = request.get_json()

    recipient = data.get("recipient", "")
    occasion = data.get("occasion", "")
    interests = data.get("interests", "")
    budget = data.get("budget", "")
    relationship = data.get("relationship", "")

    prompt = f"""
You are a thoughtful gift recommendation assistant.

Create personalized gift recommendations based on:

Recipient: {recipient}
Occasion: {occasion}
Interests: {interests}
Budget: ₹{budget}
Relationship: {relationship}

Give exactly 4 gift recommendations.

For each gift, use this format:

GIFT 1:
Name:
Why it fits:
Estimated price:

Keep recommendations realistic and suitable for the given budget.
Do not recommend dangerous, illegal, or inappropriate products.
Keep the response concise.
"""

    response = client.models.generate_content(
        model="gemma-4-26b-a4b-it",
        contents=prompt
    )

    gifts = response.text

    if not gifts:
        gifts = "Unable to generate gift recommendations. Please try again."

    return jsonify({
        "gifts": gifts
    })


if __name__ == "__main__":
    app.run(debug=True)