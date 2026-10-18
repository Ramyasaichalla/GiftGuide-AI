# 🎁 GiftGuide AI

GiftGuide AI is an AI-powered gift recommendation tool that helps people find thoughtful gift ideas based on the recipient, occasion, interests, budget, and relationship.

It uses the open-weight **Gemma model** to generate personalized gift recommendations.

## ✨ Features

- 🎁 Personalized gift recommendations
- 🤖 AI-powered suggestions using Gemma
- 💝 Recipient and occasion based recommendations
- 💰 Budget-aware suggestions
- 🧠 Interest-based personalization
- 💻 Simple and easy-to-use interface

## 🛠️ Technologies Used

- Python
- Flask
- JavaScript
- HTML
- CSS
- Google GenAI SDK
- Gemma

## 🤖 How AI Is Used

The user provides:

- Recipient
- Occasion
- Interests
- Budget
- Relationship

These details are sent to the Gemma model.

Gemma generates exactly four personalized gift recommendations containing:

- Gift name
- Why the gift fits
- Estimated price

The recommendations are designed to match the user's interests, relationship, occasion, and budget.

## 🔄 How It Works

```text
Recipient
    +
Occasion
    +
Interests
    +
Budget
    +
Relationship
        ↓
      Gemma
        ↓
Personalized Gift Recommendations
        ↓
Gift Name + Why It Fits + Estimated Price
```

## 🚀 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/Ramyasaichalla/GiftGuide-AI.git
```

### 2. Open the project

```bash
cd GiftGuide-AI
```

### 3. Create a virtual environment

```bash
python -m venv venv
```

### 4. Activate the virtual environment

On Windows:

```bash
venv\Scripts\activate
```

### 5. Install dependencies

```bash
pip install flask google-genai python-dotenv
```

### 6. Create a `.env` file

Create a file named `.env` in the project folder and add your Gemini API key:

```text
GEMINI_API_KEY=your_api_key_here
```

### 7. Run the application

```bash
python app.py
```

### 8. Open the application

Open this address in your browser:

```text
http://127.0.0.1:5000
```

## 🔐 Security

The Gemini API key is stored in a `.env` file.

The `.env` file is included in `.gitignore`, so the API key is not uploaded to the public GitHub repository.

The virtual environment is also excluded from Git.

## 💡 Why Open Innovation Matters

GiftGuide AI uses an open-weight AI model to build a practical application without creating an AI model from scratch.

Open AI models make it easier for students, developers, and small creators to experiment with AI and build useful applications for real-world problems.

## 💼 Who Could Use or Pay for It?

GiftGuide AI could be useful for:

- 🎁 Gift shops
- 🛍️ Personalized gift businesses
- 🎉 Event and wedding planners
- 💝 People who frequently need gift ideas
- 🏪 Small businesses that want to offer personalized gift suggestions

A future version could be offered as a simple AI-powered recommendation service for businesses that want to help their customers choose gifts.

## 🎯 Hacktoberfest 2026

GiftGuide AI was created for the **Hacktoberfest 2026 Week 2: Side Hustle Challenge**.

The project explores how open-source AI can be used to create a practical tool that could become a small side-hustle or business service.

## 🔮 Future Improvements

- 🛒 Gift shopping links
- 💰 More detailed price filtering
- 🎉 Occasion-specific recommendations
- ⭐ Improved recommendation formatting
- 🌐 Deployment as a public web application
- 🏪 Business-focused recommendation features

## 👩‍💻 Author

**Ramya Sai Challa**

B.Tech Information Technology Student

Python Developer | AI Application Enthusiast | DSA Learner

## 📌 Project Repository

GitHub:

https://github.com/Ramyasaichalla/GiftGuide-AI
