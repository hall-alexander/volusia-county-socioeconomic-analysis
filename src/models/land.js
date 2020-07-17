/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('land', {
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
		'lline': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'code': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'code_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'ltype': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'ltype_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'units': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'fronact': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'froneff': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'depth': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'depfact': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'locfact': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'influ': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'influ2': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'brate': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'chgrsn': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'chgrsn_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'acres': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'sf': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'note1': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'agflg': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'soil': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'soil_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'class': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'use': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'ag_acres': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'soilval': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'price': {
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
		}
	}, {
		tableName: 'land'
	});
};
