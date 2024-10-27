const { DataTypes } = require( "sequelize")
const {db} = require( "../config/database")

const Barang = db.define(
    "Barang", 
    {
        kode_barang : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true, 
            autoIncrement : true
        },
        nama : {
            type : DataTypes.STRING(255),
            allowNull : true,
        },
        kategori : {
            type : DataTypes.STRING(100),
            allowNull : true,
        },
        jumlah_barang : {
            type : DataTypes.INTEGER,
            allowNull : true,
        },
        nomor_hp : {
            type : DataTypes.STRING(14),
            allowNull : true,
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
        tableName : "ref_barang",
        createdAt : "udcr",
        updatedAt : "udch"
    }
)

module.exports = Barang