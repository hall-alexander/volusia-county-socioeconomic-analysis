/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('owner', {
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
		'ownseq': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'ownnum': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'own1': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'own2': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'careof': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'addr1': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'addr2': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'addr3': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'zipcode': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'country': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'pctown': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'owntype1': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'owntype1_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'owntype2': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'owntype2_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'dba': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'owner'
	});
};
