
# Reverse Pharma Logistics Tracker

## Live Demo

[https://pharma-reverse-logistics-tracker-production.up.railway.app/](https://pharma-reverse-logistics-tracker-production.up.railway.app/)

---

## Overview

The Reverse Pharma Logistics Tracker is a web-based system designed to manage and monitor the lifecycle of returned and expired pharmaceutical products.

It leverages a custom blockchain-inspired architecture to ensure **data integrity, transparency, and traceability** across all stakeholders involved in reverse logistics operations.

This system addresses critical gaps in pharmaceutical supply chains by providing a structured, verifiable, and tamper-resistant record of each batch's journey from return to disposal.

---

## Key Features

* End-to-end tracking of returned pharmaceutical batches
* Lifecycle management: **Expired → Collected → Verified → Destroyed**
* Role-based workflow enforcement (Retailer, Distributor, Manufacturer, Disposal Unit, Admin)
* Validation of actions based on authorized roles
* Blockchain-based immutable record of all transactions
* Real-time batch tracking with timeline visualization
* Integrated blockchain explorer for full chain inspection
* QR code generation for quick batch identification and tracking
* Admin dashboard with analytics (status distribution and counts)

---

## Problem Statement

Reverse logistics in the pharmaceutical industry often suffers from:

* Lack of transparency in handling expired or returned drugs
* Inconsistent tracking across multiple stakeholders
* Risk of improper disposal and regulatory non-compliance
* Difficulty in auditing and verifying product lifecycle history

These issues can lead to safety risks, legal complications, and inefficiencies in supply chain management.

---

## Solution

This system introduces a structured and technology-driven approach by:

* Digitizing the lifecycle of pharmaceutical returns
* Enforcing role-based actions to prevent unauthorized updates
* Maintaining an immutable log using blockchain principles
* Providing clear visibility into batch movement and status
* Enabling quick verification through QR-based tracking

---

## System Architecture

The application follows a simple full-stack architecture:

* **Frontend:** Handles user interaction, dashboards, and visualization
* **Backend:** Processes requests, validates roles, and updates the blockchain
* **Blockchain Layer:** Custom implementation ensuring immutability and traceability
* **Storage:** JSON-based persistence for prototype simplicity

---

## Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Data Storage:** JSON file-based persistence
* **Blockchain:** Custom lightweight implementation (hash-linked blocks)
* **Deployment:** Railway

---

## API Endpoints

| Method | Endpoint | Description                         |
| ------ | -------- | ----------------------------------- |
| POST   | /update  | Add a new batch status update       |
| GET    | /chain   | Retrieve full blockchain data       |
| POST   | /reset   | Reset blockchain (demo/testing use) |

---

## Project Structure

```
├── server.js          # Backend server and API routes  
├── blockchain.js      # Blockchain logic and block structure  
├── chain.json         # Persistent storage of blockchain data  
├── index.html         # Frontend interface  
```

---

## Setup Instructions

```bash
git clone https://github.com/2507-thaaru/reverse---logistic--pharmacy-
cd reverse---logistic--pharmacy-
npm install
node server.js
```

The application will run locally on the configured port.

---

## Current Limitations

* Uses JSON file storage instead of a scalable database
* Basic role validation without full authentication system
* Blockchain is a simplified custom implementation (not decentralized)
* Limited error handling and input validation

---

## Future Enhancements

* Integration with MongoDB or SQL database
* Secure authentication and authorization system (JWT-based)
* Smart contract integration using Ethereum or similar platforms
* Advanced analytics and reporting dashboards
* API security improvements and rate limiting
* Scalable microservices-based architecture
* Real-time notifications and audit logs

---

## Conclusion

This project demonstrates a practical application of blockchain concepts in solving real-world supply chain challenges within the pharmaceutical industry.

It provides a strong foundation for building a secure, transparent, and scalable reverse logistics system while showcasing full-stack development, system design, and applied blockchain logic.

