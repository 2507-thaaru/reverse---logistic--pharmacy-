# 🚀 Reverse Pharma Logistics Tracker

## 🌐 Live Demo

👉 https://pharma-reverse-logistics-tracker-production.up.railway.app/

---

## 📌 Overview

A web-based system to track and manage reverse pharmaceutical logistics using a custom blockchain model.
It ensures transparency and traceability in handling expired and returned medicines across different stakeholders.

---

## 🎯 Features

* 📦 Track returned pharmaceutical batches
* 🔄 Lifecycle tracking (Expired → Collected → Verified → Destroyed)
* 👥 Role-based system (Retailer, Distributor, Manufacturer, Disposal, Admin)
* 🔐 Validation of actions based on user role
* 🔗 Blockchain-based storage of all updates
* 📊 Admin analytics (Expired, Collected, Verified, Destroyed counts)
* 🔍 Batch tracking with timeline view
* 🧾 Blockchain explorer to view all blocks
* 📱 QR code generation for batch tracking

---

## 🧠 Problem Statement

Reverse logistics in the pharmaceutical sector lacks proper tracking, leading to risks such as:

* Improper disposal of expired drugs
* Lack of transparency in handling returns
* Difficulty in verifying product lifecycle

---

## 💡 Solution

This system provides:

* Structured tracking of each batch
* Clear role-based workflow
* Immutable record of all updates using blockchain logic
* Easy visualization of batch history and system data

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Storage:** JSON (file-based persistence)
* **Blockchain:** Custom lightweight implementation

---

## 📡 API Endpoints

| Method | Endpoint  | Description                 |
| ------ | --------- | --------------------------- |
| POST   | `/update` | Add a new status update     |
| GET    | `/chain`  | Get full blockchain data    |
| POST   | `/reset`  | Reset blockchain (for demo) |

---

## 📂 Project Structure

```id="k2j3h9"
├── server.js
├── blockchain.js
├── chain.json
├── index.html
```

---

## ⚙️ Setup (Optional)

```bash id="m1n8sd"
git clone https://github.com/2507-thaaru/reverse---logistic--pharmacy-
cd reverse---logistic--pharmacy-
npm install
node server.js
```

---

## 🚀 Scope for Improvement

* Database integration (MongoDB / SQL)
* Authentication system
* Smart contract integration
* Enhanced analytics and reporting

---

## 💬 Note

This project demonstrates a working prototype of a blockchain-based reverse logistics tracking system with role-based workflow and real-time updates.
