/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('volusia_2015', {
		'rid': {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 'nextval(volusia.volusia_2015_rid_seq::regclass)',
			comment: "null",
			primaryKey: true
		},
		'rast': {
			type: DataTypes.ENUM(),
			allowNull: true,
			comment: "null"
		}
	}, {
		tableName: 'volusia_2015'
	});
};
