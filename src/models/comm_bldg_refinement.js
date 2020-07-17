/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('comm_bldg_refinement', {
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
		'lnum': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'refinement': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'refinement_desc': {
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
		'ofnum': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'rcn': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'comm_bldg_refinement'
	});
};
