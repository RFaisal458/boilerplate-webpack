
# Boilerplate Webpack

  

<div  align="center">
<a  href="https://github.com/webpack/webpack">
<img  width="200"  height="200"  vspace=""  hspace="25"  src="https://worldvectorlogo.com/logos/webpack.svg">
</a>
</div>

## Getting Started

1. Install dependencies: `npm install`

## Startup

1. `cd` to project directory
3. Start environment: `npm run build` (will create `dist` directory)
4. Navigate to [http://localhost:9000/](http://localhost:9000/)

  

### Requirements

- Node v12.18.3

- Npm 6.14.6

- webpack ^4.44.1

- webpack-cli ^3.3.12

- webpack-dev-server ^3.11.0

- @babel/cli ^7.10.5

- @babel/core ^7.11.1

- @babel/preset-env ^7.11.0

- babel-loader ^8.1.0

- css-loader ^4.2.0

- html-webpack-plugin ^4.3.0

- mini-css-extract-plugin ^0.9.0

- node-sass ^4.14.1

- sass ^1.26.10

- sass-loader ^9.0.2

- style-loader ^1.2.1

  

### Reference

  

- https://webpack.js.org/

- https://babeljs.io/

- https://github.com/webpack-contrib

- https://github.com/webpack-contrib/extract-text-webpack-plugin

- https://github.com/jantimon/html-webpack-plugin#options

- https://medium.com/codelabs-unikom/webpack-apa-itu-b6272cd16322

- https://medium.com/react-id/memahami-webpack-tidak-sesulit-memahami-wanita-part-i-d185219f6559

### Additional Information

1.  **React**  
    React adalah sebuah library yang mengandung  _source code_  untuk komponen, state, props dan semua kode yang bereaksi.
    
2.  **React DOM**  
    Library react-dom seperti namanya adalah perekat antara React dan  [DOM (Document Object Model)](https://www.w3schools.com/js/js_htmldom.asp). Seringkali, Anda hanya akan menggunakannya untuk satu hal: memasang aplikasi Anda ke file index.html dengan  _ReactDOM.render()_.
    
3.  **Webpack**  
    Webpack adalah sebuah bundel modul JavaScript yang  _open source_. Tujuan utamanya adalah untuk menggabungkan file-file JavaScript sehingga dapat digunakan dalam browser, namun ia juga mampu mengubah, menggabungkan, atau mengemas hampir semua sumber daya atau aset apa pun. Webpack mengambil modul dengan dependensi dan menghasilkan aset statis yang mewakili modul-modul tersebut.
    
4.  **Webpack CLI**  
    Alat untuk menjalankan perintah webpack dari terminal atau CMD.
    
5.  **Webpack Dev Server**  
    Webpack-dev-server adalah server Node.js Express kecil, yang menggunakan webpack-dev-middleware untuk melayani paket webpack. Ini juga memiliki sedikit waktu proses yang terhubung ke server melalui  [Sock.js](https://github.com/sockjs/). Server memberikan informasi tentang status kompilasi ke klien, yang bereaksi terhadap peristiwa tersebut
    
6.  **Babel Core**  
    Babel adalah modul utama dari Babel yang berfungsi untuk mengubah syntax JavaScript terbaru (ES6) ke vanila JavaScript (ES5).
    
7.  **Babel Preset Env**  
    Babel preset env adalah preset pintar yang memungkinkan Anda untuk menggunakan JavaScript terbaru tanpa perlu mikromanage yang mengubah sintaks (dan opsional,  _browser polyfills_) yang dibutuhkan oleh lingkungan target Anda. Ini membuat hidup Anda lebih mudah dan  _bundle_  JavaScript menjadi lebih kecil!
    
8.  **Babel Preset React**  
    Modul ini berguna untuk mengubah source code JSX ke vanila JavaScript.
    
9.  **Babel Loader**  
    Modul ini memungkinkan pemindahan file JavaScript menggunakan Babel dan webpack.
    
10.  **Html Webpack Plugin**  
    HtmlWebpackPlugin menyederhanakan pembuatan file HTML untuk melayani bundel webpack Anda.
    
11.  **Mini Css Extract Plugin**  
    Plugin ini mengekstrak CSS ke dalam file terpisah. Ini menciptakan file CSS dari setiap file JS yang berisi CSS. Mendukung  _On-Demand-Loading_  dari CSS dan  _SourceMaps_.
