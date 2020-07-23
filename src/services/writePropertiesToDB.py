import scrapCommercialProperties as scrap
import psycopg2



USERNAME = "postgres"
PASSWORD = "postgres"
#HOST = "host.docker.internal"
HOST = "localhost"
DATABASE = "spatial"

def query(conn, sql):
    cursor = conn.cursor()
    try:
        cursor.execute(sql)
        conn.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        print("Error: %s" % error)
        conn.rollback()
        cursor.close()
        return 1
    cursor.close()

def main():
    conn = psycopg2.connect(host=HOST, user=USERNAME, password=PASSWORD, database=DATABASE)

    # drop table if exists
    query(conn, "DROP TABLE IF EXISTS volusia.commercial_properties;")

    # create table
    query(conn, 'CREATE TABLE volusia.commercial_properties ( \
        "id" INTEGER, \
        "adrno" INTEGER, \
        "adrstr" TEXT, \
        "adrsuf" TEXT, \
        "city" TEXT, \
        "description" TEXT, \
        "price" TEXT, \
        "rentType" TEXT, \
        "sqft" TEXT, \
        PRIMARY KEY(id) \
        );')

    results = scrap.main()

    for i in range(len(results["properties"])):
        data = results["properties"][i]

        query(conn, """INSERT INTO volusia.commercial_properties
            ("id", "adrno", "adrstr", "adrsuf", "city", "description", "price", "rentType", "sqft")
            VALUES ({0},
            {1},
            '{2}',
            '{3}',
            '{4}',
            '{5}',
            '{6}',
            '{7}',
            '{8}'
            );""".format(i+1, data["adrno"], data["adrstr"], data["adrsuf"], data["city"], data["description"], data["price"], data["rentType"], data["sqft"]))

if __name__=='__main__':
    main()