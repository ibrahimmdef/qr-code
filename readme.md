# QR Code Generator 🔲

A simple and user-friendly web application to generate QR codes from URLs. Enter a URL and get your QR code instantly!

## 🚀 Features

- ✅ Generate QR codes from URLs
- ✅ Instant preview
- ✅ Automatic QR code saving
- ✅ URL history tracking

## 📸 Screenshot

![QR Code Generator](screenshot.png)

## 🛠️ Technologies Used

- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **EJS** - Template engine
- **qr-image** - QR code generation

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/qr-code.git
cd qr-code
```

2. Install dependencies:

```bash
npm install
```

3. Start the application:

```bash
node index.js
```

4. Open in your browser:

```
http://localhost:3000
```

## 📁 Project Structure

```
qr-code/
├── public/
│   ├── images/          # Generated QR codes
│   └── styles/          # CSS files
├── views/
│   └── index.ejs        # Main page
├── index.js             # Main application file
├── package.json
└── README.md
```

## 🎯 Usage

1. Enter a URL in the input field on the main page
2. Click the "Generate QR Code" button
3. Your QR code will be generated and displayed instantly
4. The QR code is automatically saved to the `public/images/` folder

## 📝 Notes

- Generated QR codes are stored in the `public/images/` folder
- URL history is saved in `url.txt`
- Each QR code is named with a unique timestamp

## 👤 Author

**Your Name**

- GitHub: [@ibrahimmdef](https://github.com/ibrahimmdef)

## ⭐ Support

If you like this project, don't forget to give it a star!
