/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('misc', {
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
		'micode': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'micode_desc': {
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
		'area': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'units': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'yrblt': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'effyr': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'yrrem': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'grade': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'fundep': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'ecndep': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'rcn': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'rcnld': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'exmppct': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'exmpval': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'chgrsn': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'chgrsn_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'impervious': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'granny_flat': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'misc'
	});
};
