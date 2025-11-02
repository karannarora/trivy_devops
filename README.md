# 🔒 Trivy Security Scan with Email Report

This project demonstrates how to **automate vulnerability and secret scanning** using **Trivy** inside **GitHub Actions**, and automatically **send the scan report via email** after every push or pull request.

---

## 🚀 Features

- ✅ Automatically runs on every **push** and **pull request** to the `main` branch  
- 🔍 Scans for **vulnerabilities** and **secrets** in your codebase  
- 📄 Generates a **Trivy scan report** (`trivy-scan-report.txt`)  
- ☁️ Uploads the report as a GitHub **artifact**  
- 📧 Sends the report to your configured email address automatically  

---

## ⚙️ How It Works

1. The workflow installs **Trivy** on the GitHub runner.  
2. It scans the repository filesystem using:
   ```bash
   trivy fs --scanners vuln,secret --exit-code 0 --format table -o trivy-scan-report.txt .
