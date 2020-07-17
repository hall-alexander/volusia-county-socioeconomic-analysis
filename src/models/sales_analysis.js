/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sales_analysis', {
		'parid': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'luc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'luc_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'aprland': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'aprbldg': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'aprtot': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'nbhd': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'sale_date': {
			type: DataTypes.DATEONLY,
			allowNull: true,
			comment: "null"
		},
		'price': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'zip1': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'rmbed': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'sfla': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'total_area': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'yrblt': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'misc_area': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'months_since_sale': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'geom': {
			type: DataTypes.ENUM(),
			allowNull: true,
			comment: "null"
		},
		'water_front': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'sales_analysis'
	});
};
