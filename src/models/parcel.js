/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('parcel', {
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
		'rolltype': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'acctype': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'dorid': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'alt_id': {
			type: DataTypes.TEXT,
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
		'taxdist': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'taxdist_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'nbhd': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'nbhd_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'mararea': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'mararea_desc': {
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
		'newconst': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'additions': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'deletions': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'sasd': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'nsasd': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'stxbl': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'nstxbl': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'cotxbl': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'citxbl': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'cra': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'cur': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'dtcreated': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'naics': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'naics_desc': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'eqval': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'penval': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'livunit': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		},
		'hx_flag': {
			type: DataTypes.TEXT,
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'parcel'
	});
};
