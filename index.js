// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name: 'Monica',
    gender: 'F',
    age: 17,
    email: 'monica@dingdong.com',
    favoriteColor: [
        'blue', 'red', 'White', 'pink'
    ],
    isHavePet: true,
    education: [
        {
            name: 'SD 01',
            city: 'Jakarta',
            graduate: 2016
        },
        {
            name: 'SMP 02',
            city: 'Jakarta',
            graduate: 2019
        },
        {
            name: 'SMA 03',
            city: 'Tangerang',
            graduate: 0
        }
    ],
    favoriteRestaurant: [
        'Warteg', 'Lamongan', 'Pecel_lele', 'japanese', 'Tempura', 'Sushi', 'Padang'
    ]
};
const secondUser = {
    name: 'Wendy',
    gender: 'M',
    age: 17,
    email: 'wendy@dingdong.com',
    favoriteColor: [
        'green', 'yellow', 'Grey'
    ],
    isHavePet: false,
    education: [
        {
            name: 'SD 02',
            city: 'Jakarta',
            graduate: 2010
        },
        {
            name: 'SMP 03',
            city: 'Bogor',
            graduate: 2013
        },
        {
            name: 'SMA 01',
            city: 'Surabaya',
            graduate: 2016
        },
        {
            name: 'Universitas Maju',
            city: 'Tangerang',
            graduate: 0
        }
    ],
    favoriteRestaurant: [
        'KFC', 'MCDonalds', 'A$W', 'Burger', 'Padang', 'Katsu', 'Yoshinoya', 'Eggy'
    ]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};
