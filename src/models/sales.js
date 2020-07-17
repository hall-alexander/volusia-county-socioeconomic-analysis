/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sales', {
		'parid': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'taxyr': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'saledt': {
			type: DataTypes.CHAR(30),
			allowNull: true,
			comment: "null"
		},
		'book': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'page': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'instruno': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'instrtyp': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'instrtyp_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'price': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'saletype': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'steb': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'steb_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'aprtot': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'sale_date': {
			type: DataTypes.DATEONLY,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'sales'
	});
};
