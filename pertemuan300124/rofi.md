### Create Database
CREATE DATABASE toko_kue


### CREATE TABLE PRODUK
CREATE TABLE produk(
     id_produk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     nama_produk VARCHAR(255),
     harga_produk INT,
     kategori VARCHAR(255)
);


INSERT INTO produk (nama_produk, harga_produk, kategori) 
VALUES ('Lapis Bogor', 50000, 'Makanan'),
       ('Kue Cucur', 10000, 'Makanan'),
       ('sale', 50000, 'Makanan');






### CREATE TABLE STOK
CREATE TABLE stok (
    id_stok INT AUTO_INCREMENT PRIMARY KEY,
    id_produk INT,
    jumlah_stok INT,
    tanggal_update DATE,
    FOREIGN KEY (id_produk) REFERENCES produk(id_produk)
);
INSERT INTO stok (id_produk, jumlah_stok, tanggal_update) 
VALUES (1, 100, '2024-02-12'),
       (2, 50, '2024-02-12'),
       (3, 75, '2024-02-12');


### untuk mengetahui produk dan jumlah stok
 select
    produk.nama_produk,
   stok.jumlah_stok,
    stok.tanggal_update
    from
   produk                                                  
    JOIN stok ON produk.id_produk = stok.id_produk;


### membuat table pelanggan
CREATE TABLE Pelanggan (
    id_pelanggan INT AUTO_INCREMENT PRIMARY KEY,
    nama_pelanggan VARCHAR(255),
    alamat VARCHAR(255),
    email VARCHAR(255),
    nomor_telepon VARCHAR(20)
);


INSERT INTO Pelanggan (nama_pelanggan, alamat, email, nomor_telepon) 
VALUES ('John Doe', 'Jl. Contoh No. 123', 'john@example.com', '081234567890'),
       ('Jane Doe', 'Jl. Lain No. 456', 'jane@example.com', '081234567891');




### Membuat table Transaksi penjualan
CREATE TABLE TransaksiPenjualan (
    id_transaksi INT AUTO_INCREMENT PRIMARY KEY,
    id_produk INT,
    id_pelanggan INT,
    tanggal_transaksi DATE,
    jumlah_dibeli INT,
    total_harga INT,
    FOREIGN KEY (id_produk) REFERENCES produk(id_produk),
    FOREIGN KEY (id_pelanggan) REFERENCES Pelanggan(id_pelanggan)
);


INSERT INTO TransaksiPenjualan (id_produk, id_pelanggan, tanggal_transaksi, jumlah_dibeli, total_harga) 
VALUES (1, 1, '2024-02-12', 2, 500000),
       (2, 2, '2024-02-13', 1, 10000000);


#### mengetahui pembelinya
select
     produk.nama_produk,
    transaksipenjualan.jumlah_dibeli,
     transaksipenjualan.total_harga,
     transaksipenjualan.tanggal_transaksi,
     pelanggan.nama_pelanggan
     from transaksipenjualan
     join stok ON transaksipenjualan.id_produk = stok.id_produk
     join produk ON stok.id_produk = produk.id_produk
     join pelanggan on transaksipenjualan.id_pelanggan = pelanggan.id_pelanggan;


INSERT INTO TransaksiPenjualan (id_produk, id_pelanggan, tanggal_transaksi, jumlah_dibeli, total_harga) 
     VALUES (3, 1, '2024-02-12', 2, 500000)



RIGHT JOIN
SELECT TP.id_transaksi, TP.id_produk, TP.id_pelanggan, TP.tanggal_transaksi, TP.jumlah_dibeli, TP.total_harga, P.nama_produk, PL.nama_pelanggan
FROM TransaksiPenjualan TP
RIGHT JOIN produk P ON TP.id_produk = P.id_produk
RIGHT JOIN Pelanggan PL ON TP.id_pelanggan = PL.id_pelanggan;




LEFT JOIN
SELECT TP.id_transaksi, TP.id_produk, TP.id_pelanggan, TP.tanggal_transaksi, TP.jumlah_dibeli, TP.total_harga, P.nama_produk, PL.nama_pelanggan
FROM TransaksiPenjualan TP
LEFT JOIN produk P ON TP.id_produk = P.id_produk
LEFT JOIN Pelanggan PL ON TP.id_pelanggan = PL.id_pelanggan;


