/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('comm_bldg', {
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
		'structure': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'structure_desc': {
			type: DataTypes.TEXT,
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
		'grade': {
			type: DataTypes.TEXT,
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
		'bldgjust': {
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
		'busla': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'total_area': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'units': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'comm_bldg'
	});
};
