const { DataTypes } = require( "sequelize")
const {db} = require( "../config/database")
const Barang = require( "./barang-model")
const Pembeli = require( "./pembeli-model")
const Toko = require( "./toko")

const TrxPenjualan = db.define(
    "TrxPenjualan", 
    {
        kode_penjualan : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },
	    kode_barang : {
            type : DataTypes.INTEGER,
            allowNull : true,
        },
	    kode_pembeli : {
            type : DataTypes.INTEGER,
            allowNull : true
        },
	    kode_toko : {
            type : DataTypes.INTEGER,
            allowNull : true
        },
	    jumlah_beli : {
            type : DataTypes.INTEGER,
            allowNull : true
        },
	    tanggal_beli : {
            type : DataTypes.DATE,
            allowNull : true
        },
        udcr : {
            type : DataTypes.DATE(),
            allowNull : true
        },
        udch : {
            type : DataTypes.DATE(),
            allowNull : true
        }
    },
    {
        tableName : "trx_penjualan",
        createdAt : "udcr",
        updatedAt : "udch"
    }
)

TrxPenjualan.belongsTo(Barang, {
    foreingKey : "kode_barang",
    as : "Barang"
})

Barang.hasMany(TrxPenjualan, {
    foreingKey : "kode_barang",
    as : "TrxPenjualan"
})

TrxPenjualan.belongsTo(Pembeli, {
    foreingKey : "kode_pembeli",
    as : "Pembeli"
})

Pembeli.hasMany(TrxPenjualan, {
    foreingKey : "kode_pembeli",
    as : "TrxPenjualan"
})

TrxPenjualan.belongsTo(Toko, {
    foreingKey : "kode_toko",
    as : "Toko"
})

Toko.hasMany(TrxPenjualan, {
    foreingKey : "kode_toko",
    as : "TrxPenjualan"
})

module.exports = TrxPenjualan