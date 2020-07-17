/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('condo_bldg', {
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
		'cndcmplx': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'cndcmplx_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'model': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'model_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'condolvl': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'condovw': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'condovw_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'area': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'bedrm': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'bath': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'yrblt': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'condo_bldg'
	});
};
