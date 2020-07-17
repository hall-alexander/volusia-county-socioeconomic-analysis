/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('res_area', {
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
		'card': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'lline': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'lower': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'lower_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'first': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'first_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'second': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'second_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'third': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'third_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'area': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'depr': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'value': {
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
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'chgrsn_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'vect': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'granny_flats_flag': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'res_area'
	});
};
