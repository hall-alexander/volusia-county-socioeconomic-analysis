/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('condo_misc', {
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
		'cndtype': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'cndtype_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'unit_type': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'area': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'yrblt': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'grade': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'meas1': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'meas2': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'rateovr': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'rcnld': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'condo_misc'
	});
};
