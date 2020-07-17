/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('gis_streets', {
		'gid': {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 'nextval(volusia.gis_streets_gid_seq::regclass)',
			comment: "null",
			primaryKey: true
		},
		'name': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'strcode': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'intersec1': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'intersec1_': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'intersec2': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'intersec2_': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'rbs_nbr': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'l_add_from': {
			type: DataTypes.BIGINT,
			allowNull: true,
			comment: "null"
		},
		'l_add_to': {
			type: DataTypes.BIGINT,
			allowNull: true,
			comment: "null"
		},
		'r_add_from': {
			type: DataTypes.BIGINT,
			allowNull: true,
			comment: "null"
		},
		'r_add_to': {
			type: DataTypes.BIGINT,
			allowNull: true,
			comment: "null"
		},
		'pre_dir': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'street_nam': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'street_typ': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'suf_dir': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'lzip': {
			type: DataTypes.BIGINT,
			allowNull: true,
			comment: "null"
		},
		'rzip': {
			type: DataTypes.BIGINT,
			allowNull: true,
			comment: "null"
		},
		'base': {
			type: DataTypes.BIGINT,
			allowNull: true,
			comment: "null"
		},
		'hook': {
			type: DataTypes.BIGINT,
			allowNull: true,
			comment: "null"
		},
		'st_label': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'lcomm': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'rcomm': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'oldseg': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'segment': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'lcity': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'rcity': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'lmun': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'rmun': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'mod_p_l': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'mod_p_r': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'mod_f_l': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'mod_f_r': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'alias': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'reviseddat': {
			type: DataTypes.DATEONLY,
			allowNull: true,
			comment: "null"
		},
		'targ_p_l': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'targ_p_r': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'targ_f_l': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'targ_f_r': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'alias2': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'mph': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'oneway': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'alias3': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'alias4': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'shape_stle': {
			type: DataTypes.DOUBLE,
			allowNull: true,
			comment: "null"
		},
		'geom': {
			type: DataTypes.ENUM(),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'gis_streets'
	});
};
