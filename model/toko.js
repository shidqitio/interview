const { DataTypes } = require( "sequelize")
const {db} = require( "../config/database")

const Toko = db.define(
    "Toko", 
    {
        kode_toko : {
            type : DataTypes.INTEGER,
            allowNull : false,
            primaryKey : true,
            autoIncrement : true
        },
        nama_toko : {
            type : DataTypes.STRING(100),
            allowNull : true
        },
        alamat_toko : {
            type : DataTypes.TEXT(),
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
        tableName : "ref_toko",
        createdAt : "udcr",
        updatedAt : "udch"
    }
)

module.exports = Toko
