### Create Database
CREATE DATABASE toko_kue

### CREATE TABLE PRODUK
CREATE TABLE produk(
     id_produk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     nama_produk VARCHAR(255),
     harga_produk INT,
     kategori VARCHAR(255)
);

### CREATE TABLE STOK
CREATE TABLE stok (
    id_stok INT AUTO_INCREMENT PRIMARY KEY,
    id_produk INT,
    jumlah_stok INT,
    tanggal_update DATE,
    FOREIGN KEY (id_produk) REFERENCES produk(id_produk)
);

### untuk mengetahui produk dan jumlah stok
 select 
    -> produk.nama_produk,
    -> stok.jumlah_stok,
    -> stok.tanggal_update
    -> from
    -> produk                                                   
    -> JOIN stok ON produk.id_produk = stok.id_produk;

### membuat table pelanggan
CREATE TABLE Pelanggan (
    id_pelanggan INT AUTO_INCREMENT PRIMARY KEY,
    nama_pelanggan VARCHAR(255),
    alamat VARCHAR(255),
    email VARCHAR(255),
    nomor_telepon VARCHAR(20)
);

### Membuat table Transaksi penjualan
CREATE TABLE TransaksiPenjualan (
    id_transaksi INT AUTO_INCREMENT PRIMARY KEY,
    id_produk INT,
    id_pelanggan INT,
    tanggal_transaksi DATE,
    jumlah_dibeli
    total_harga INT,
    FOREIGN KEY (id_produk) REFERENCES produk(id_produk),
    FOREIGN KEY (id_pelanggan) REFERENCES Pelanggan(id_pelanggan)
);

    
#### mengetahui pembelinya
select 
     produk.nama_produk,
     stok.jumlah_stok,
     transaksipenjualan.total_harga,
     transaksipenjualan.tanggal_transaksi,
     pelanggan.nama_pelanggan
     from transaksipenjualan
     join stok ON transaksipenjualan.id_produk = stok.id_produk
     join produk ON stok.id_produk = produk.id_produk
     join pelanggan on transaksipenjualan.id_pelanggan = pelanggan.id_pelanggan;
